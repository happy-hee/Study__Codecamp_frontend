/**
 * 게시글 상세 페이지
 */

import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/comment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/comment/list/BoardCommentList.container";

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
