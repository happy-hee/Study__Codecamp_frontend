import { gql } from "@apollo/client";

// 게시글 조회
export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

// 게시글 갯수 조회
export const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;
