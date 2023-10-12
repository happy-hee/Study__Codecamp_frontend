/**
 * 댓글 작성 Container
 */
import { useState } from "react";
import CommentNewUI from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries";

export default function CommentNew() {
  const router = useRouter();

  // 데이터 State
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(1);
  // 댓글 등록 Mutation
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  // 데이터 저장
  function onChangeWriter(e) {
    setWriter(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }
  function onChangeContents(e) {
    setContents(e.target.value);
  }
  function onChangeRating(e) {
    setRating(e.target.value);
  }

  // 댓글 등록
  const onClickSubmit = async () => {
    // 데이터 빈칸 검증
    if (!writer) {
      alert("이름을 입력해주세요.");
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
    }
    if (!contents) {
      alert("내용을 입력해주세요.");
    }
    if (!rating) {
      alert("점수를 선택해주세요.");
    }

    if (writer && password && contents && rating) {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
            },
            boardId: router.query.boardId,
          },
        });

        alert("등록되었습니다.");

        // 게시글 상세페이지로 이동
        router.push(`/boards/${router.query.boardId}`);
      } catch (error) {
        alert(error.messate);
      }
    }
  };

  return (
    <>
      <CommentNewUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onChangeRating={onChangeRating}
        onClickSubmit={onClickSubmit}
      />
    </>
  );
}
