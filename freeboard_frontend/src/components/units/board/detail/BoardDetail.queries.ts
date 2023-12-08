import { gql } from "@apollo/client";

// API 요청
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      youtubeUrl
      images
      boardAddress {
        address
        addressDetail
        zipcode
      }
    }
  }
`;
