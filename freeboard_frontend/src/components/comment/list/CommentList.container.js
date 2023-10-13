/**
 * 댓글 리스트 Container
 */
import { useQuery } from "@apollo/client";
import CommentListUI from "./CommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";
import { useRouter } from "next/router";

export default function CommentLlist() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      page: 1,
      boardId: router.query.boardId,
    },
  });

  return (
    <>
      <CommentListUI data={data} />
    </>
  );
}
