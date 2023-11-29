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
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { IBoardCommentNewProps } from "./BoardCommentWrite.types";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";

export default function BoardCommentNew(props: IBoardCommentNewProps) {
  const router = useRouter();

  // 데이터 State
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
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
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

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
              rating,
            },
            boardId: router.query.boardId,
          },
          // refetchQueries를 통해 다시 요청을 보내고 데이터를 받아옴
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
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
    setWriter("");
    setPassword("");
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
    if (!password) {
      Modal.warning({
        content: "비밀번호를 입력해주세요.",
      });
      return;
    }

    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (contents) updateBoardCommentInput.contents = contents;
    if (rating) updateBoardCommentInput.rating = rating;

    try {
      // boardId가 string이 아닐 경우 대비 얼럿
      if (typeof props.el?._id !== "string") {
        Modal.error({ content: "시스템에 문제가 있습니다." });
        return;
      }

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        // refetchQueries를 통해 다시 요청을 보내고 데이터를 받아옴
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });

      Modal.success({
        content: "수정되었습니다.",
      });

      // 옵셔널 체이닝(?.)을 통해 setIsEdit 가 undefined인지 여부 확인 후 아닐 시 실행
      props.setIsEdit?.(false);
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
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onChangeRating={onChangeRating}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        writer={writer}
        password={password}
        contents={contents}
        rating={rating}
        el={props.el}
      />
    </>
  );
}
