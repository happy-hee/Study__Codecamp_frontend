/**
 * 여러개 수정 리팩토링 (2) - 댓글 아이템 컴포넌트 분리
 */

import { useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types";
import CommentItem from "../../../src/components/units/16-comment-item";

// 조회
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function StaticRoutingMovedPage() {
  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  return (
    <div>
      {/**
       * [STUDY MEMO]
       * 댓글 하나 하나를 컴포넡트 아이템으로 분리하면,
       * 그 아이템 각각이 isEdit를 가지기 때문에 따로따로 관리 할 수 있다.
       *
       */}
      {data?.fetchBoards.map((el) => <CommentItem key={el._id} el={el} />)}
    </div>
  );
}
