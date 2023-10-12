import { gql } from "@apollo/client";

// 게시글 등록
export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      # 작성자, 제목, 비밀번호, 내용 부분만 작업했으므로 다른 것들은 주석 처리
      # youtubeUrl
      # likeCount
      # dislikeCoune
      # images
      # boardAddress
      # user
      # createdAt
      # updatedAt
      # deletedAt
    }
  }
`;

// API 요청
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      # 작성자, 제목, 비밀번호, 내용 부분만 작업했으므로 다른 것들은 주석 처리
      # youtubeUrl
      # likeCount
      # dislikeCoune
      # images
      # boardAddress
      # user
      # createdAt
      # updatedAt
      # deletedAt
    }
  }
`;

// 게시글 수정
export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!) {
    updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId) {
      _id
      writer
      title
      contents
      # 작성자, 제목, 비밀번호, 내용 부분만 작업했으므로 다른 것들은 주석 처리
      # youtubeUrl
      # likeCount
      # dislikeCoune
      # images
      # boardAddress
      # user
      # createdAt
      # updatedAt
      # deletedAt
    }
  }
`;
