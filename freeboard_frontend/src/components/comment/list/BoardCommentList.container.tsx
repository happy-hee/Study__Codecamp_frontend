/**
 * 댓글 리스트 Container
 */
import { useMutation, useQuery } from "@apollo/client";
import BoardCommentList from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardCommentLlist() {
  const router = useRouter();

  const boardId = typeof router.query.boardId === "string" ? router.query.boardId : "";

  const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId,
    },
    skip: boardId === "",
  });

  const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT);

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
    const password = prompt("비밀번호를 입력해주세요.");
    try {
      if (event.target instanceof HTMLButtonElement) {
        Modal.error({ content: "시스템에 문제가 있습니다." });
        return;
      }
      const boardCommentId = event.currentTarget.id;

      await deleteBoardComment({
        variables: {
          password,
          boardCommentId,
        },

        // refetchQueries를 통해 다시 요청을 보내고 데이터를 받아옴
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <>
      <BoardCommentList onClickDelete={onClickDelete} data={data}/>
    </>
  );
}
