/**
 * 댓글 리스트 Container
 */
import { useMutation, useQuery } from "@apollo/client";
import CommentListUI from "./CommentList.presenter";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./CommentList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IMutation, IMutationDeleteBoardCommentArgs, IQuery, IQueryFetchBoardCommentsArgs } from "../../../commons/types/generated/types";

export default function CommentLlist() {
  const router = useRouter();

  if (typeof router.query.boardId !== "string") {
    alert("시스템에 문제가 있습니다.");
    return;
  }

  const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT);

  const onClickDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    // e.target이 태그인지 아닌지 확인
    if (e.target instanceof HTMLButtonElement) {
      const password = prompt("비밀번호를 입력해주세요.");
      const boardCommentId = e.currentTarget.id;

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
    }
  };

  return (
    <>
      <CommentListUI onClickDelete={onClickDelete} data={data} />
    </>
  );
}
