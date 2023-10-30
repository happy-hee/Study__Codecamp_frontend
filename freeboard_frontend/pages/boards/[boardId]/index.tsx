/**
 * 게시글 상세 페이지
 */

import BoardDetail from "../../../src/components/boards/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/comment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/comment/list/BoardCommentList.container";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      {/* 댓글 작성 */}
      <BoardCommentWrite />
      {/* 댓글 리스트 */}
      <BoardCommentList />
    </>
  );
}
