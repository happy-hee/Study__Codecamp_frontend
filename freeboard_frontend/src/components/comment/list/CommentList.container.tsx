/**
 * 댓글 리스트 Container
 */
import { useMutation, useQuery } from "@apollo/client";
import CommentListUI from "./CommentList.presenter";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./CommentList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function CommentLlist() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickDelete = async (e: MouseEvent<HTMLButtonElement>) => {
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
  };

  return (
    <>
      <CommentListUI onClickDelete={onClickDelete} data={data} />
    </>
  );
}
