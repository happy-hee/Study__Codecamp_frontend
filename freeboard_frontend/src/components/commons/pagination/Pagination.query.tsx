/**
 * Pagination Query
 */

import { gql } from "@apollo/client";
// 게시글 갯수 조회
export const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;
