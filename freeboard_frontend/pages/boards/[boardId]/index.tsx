/**
 * 게시글 상세 페이지
 */

import BoardDetail from "../../../src/components/boards/detail/BoardDetail.container";
import CommentWrite from "../../../src/components/comment/write/CommentWrite.container";
import CommentList from "../../../src/components/comment/list/CommentList.container";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      {/* 댓글 작성 */}
      <CommentWrite />
      {/* 댓글 리스트 */}
      <CommentList />
    </>
  );
}