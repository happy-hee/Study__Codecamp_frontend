/**
 * 게시글 수정 페이지
 */
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/boards/write/BoardWrite.container";
import { gql, useQuery } from "@apollo/client";

// 등록하기에서 FETCH_BOARD를 할 필요가 없기 때문에
// BoardWrite.container.js 에서 FETCH 하지 않고,
//수정하기 페이지에서 FETCH 하고 props로 넘겨준다.
// API 요청
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return <BoardWrite isEdit={true} data={data} />;
}