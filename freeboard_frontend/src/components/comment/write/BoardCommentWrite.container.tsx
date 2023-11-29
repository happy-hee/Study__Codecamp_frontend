/**
 * 댓글 작성 Container
 */
import { useState, ChangeEvent } from "react";
// import { useState } from "react";
import BoardCommentNewUI from "./BoardCommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import { IBoardCommentNewProps } from "./BoardCommentWrite.types";

export default function BoardCommentNew(props: IBoardCommentNewProps) {
  const router = useRouter();

  // 데이터 State
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
  });
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(3);
  // 댓글 등록 Mutation
  const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">, IMutationCreateBoardCommentArgs>(
    CREATE_BOARD_COMMENT
  );
  // 댓글 수정
  const [updateBoardComment] = useMutation<Pick<IMutation, "updateBoardComment">, IMutationUpdateBoardCommentArgs>(
    UPDATE_BOARD_COMMENT
  );

  // 이름/비밀번호/내용
  function onChangeInputs(event: ChangeEvent<HTMLInputElement>) {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  }

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  // 별점
  const onChangeRating = (value: number): void => {
    setRating(value);
  };

  // 댓글 등록
  const onClickSubmit = async (): Promise<void> => {
    // 데이터 빈칸 검증
    if (!inputs.writer) {
      Modal.warning({
        content: "이름을 입력해주세요.",
      });
    }
    if (!inputs.password) {
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

    if (inputs.writer && inputs.password && contents && rating) {
      try {
        // boardId가 string이 아닐 경우 대비 얼럿
        if (typeof router.query.boardId !== "string") {
          Modal.error({ content: "시스템에 문제가 있습니다." });
          return;
        }

        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              ...inputs,
              contents,
              rating,
            },
            boardId: router.query.boardId,
          },
        });

        Modal.success({
          content: "등록되었습니다.",
        });

        // 게시글 상세페이지로 이동
        void router.push(`/boards/${router.query.boardId}`);
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            content: error.message,
          });
        }
      }
    }

    // 등록 후 값 비우기
    setInputs({
      writer: "",
      password: "",
    });
    setContents("");
    setRating(3);
  };

  // 댓글 수정
  const onClickUpdate = async (): Promise<void> => {
    // 검증
    if (!contents && !rating) {
      Modal.warning({
        content: "수정한 내용이 없습니다.",
      });
      return;
    }
    if (!inputs.password) {
      Modal.warning({
        content: "비밀번호를 입력해주세요.",
      });
      return;
    }

    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (contents) updateBoardCommentInput.contents = contents;
    if (rating) updateBoardCommentInput.rating = rating;

    try {
      const result = await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: inputs.password,
          boardCommentId: props.el?._id,
        },
      });
      console.log(result);

      Modal.success({
        content: "수정되었습니다.",
      });

      props.setIsEdit(false);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <>
      <BoardCommentNewUI
        isEdit={props.isEdit}
        onChangeInputs={onChangeInputs}
        onChangeContents={onChangeContents}
        onChangeRating={onChangeRating}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        writer={inputs.writer}
        password={inputs.password}
        contents={contents}
        rating={rating}
        el={props.el}
      />
    </>
  );
}
