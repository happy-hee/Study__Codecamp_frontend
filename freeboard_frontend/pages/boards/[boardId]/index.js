/**
 * 게시글 상세 페이지
 */

import BoardDetail from "../../../src/components/boards/detail/BoardDetail.container";
import CommentWrite from "../../../src/components/comment/write/CommentWrite.container";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      {/* 댓글 */}
      <CommentWrite />
    </>
  );
}
