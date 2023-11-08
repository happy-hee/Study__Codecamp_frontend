/**
 * 댓글 리스트 Container
 */
import { useMutation, useQuery } from "@apollo/client";
import BoardCommentList from "./BoardCommentList.presenter";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardCommentList.queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardCommentLlist() {
  const router = useRouter();
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState("");
  const [password, setPassword] = useState("");

  const boardId = typeof router.query.boardId === "string" ? router.query.boardId : "";

  const { data } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId,
    },
    skip: boardId === "",
  });

  const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(
    DELETE_BOARD_COMMENT,
  );

  const onClickDeleteModalToggle = (): void => {
    setisOpenDeleteModal((prev) => !prev);
  };

  const onClickDeleteModal = (event: MouseEvent<HTMLButtonElement>): void => {
    setBoardCommentId(event.currentTarget.id); // 해당 댓글의 id 값을 임시 저장
    setisOpenDeleteModal((prev) => !prev);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
    // const password = prompt("비밀번호를 입력해주세요.");
    try {
      if (event.target instanceof HTMLButtonElement) {
        Modal.error({ content: "시스템에 문제가 있습니다." });
        return;
      }

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

      // 비밀번호 입력 모달 닫기
      setisOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <>
      <BoardCommentList
        onClickDelete={onClickDelete}
        data={data}
        isOpenDeleteModal={isOpenDeleteModal}
        onClickDeleteModal={onClickDeleteModal}
        onClickDeleteModalToggle={onClickDeleteModalToggle}
        onChangePassword={onChangePassword}
      />
    </>
  );
}
