/**
 * 댓글 작성 Container
 */
import { useState, ChangeEvent } from "react";
import BoardCommentNewUI from "./BoardCommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { IMutation, IMutationCreateBoardCommentArgs } from "../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardCommentNew() {
  const router = useRouter();

  // 데이터 State
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState("");
  // 댓글 등록 Mutation
  const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);

  // 데이터 저장
  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
  }
  function onChangeRating(event: ChangeEvent<HTMLInputElement>) {
    setRating(event.target.value);
  }

  // 댓글 등록
  const onClickSubmit = async () => {
    // 데이터 빈칸 검증
    if (!writer) {
      Modal.warning({
        content: "이름을 입력해주세요.",
      });
    }
    if (!password) {
      Modal.warning({
        content: "비밀번호를 입력해주세요.",
      });
    }
    if (!contents) {
      Modal.warning({
        content: "내용을 입력해주세요.",
      });
    }
    if (!rating) {
      Modal.warning({
        content: "점수를 선택해주세요.",
      });
    }

    if (writer && password && contents && rating) {
      try {
        // boardId가 string이 아닐 경우 대비 얼럿
        if (typeof router.query.boardId !== "string") {
          Modal.error({ content: "시스템에 문제가 있습니다." });
          return;
        }

        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating: Number(rating),
            },
            boardId: router.query.boardId,
          },
        });

        Modal.success({
          content: "등록되었습니다.",
        });

        // 게시글 상세페이지로 이동
        router.push(`/boards/${router.query.boardId}`);
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            content: error.message,
          });
        }
      }
    }
  };

  return (
    <>
      <BoardCommentNewUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onChangeRating={onChangeRating}
        onClickSubmit={onClickSubmit}
      />
    </>
  );
}
