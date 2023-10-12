/**
 * 게시글 등록 페이지
 */
import BoardWrite from "../../../src/components/boards/write/BoardWrite.container";

export default function BoardNewPage() {
  return <BoardWrite isEdit={false} />;
}
