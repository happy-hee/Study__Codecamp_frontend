/**
 * 댓글 작성 Queries
 */
import { gql } from "@apollo/client";

// 댓글 등록
export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID!) {
    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
      _id
      writer
      contents
      rating
      # user
      # createdAt
      # updatedAt
      # deletedAt
    }
  }
`;
