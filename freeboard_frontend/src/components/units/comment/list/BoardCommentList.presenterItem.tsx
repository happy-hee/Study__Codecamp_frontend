import { useState } from "react";
import BoardCommentNew from "../../comment/write/BoardCommentWrite.container";
import type { ChangeEvent, MouseEvent } from "react";
import type { IMutation, IMutationDeleteBoardCommentArgs } from "../../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardCommentList.queries";
import { IBoardCommentProps } from "./BoardCommentList.types";
import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardComment(props: IBoardCommentProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  const [deleteBoardComment] = useMutation<Pick<IMutation, "deleteBoardComment">, IMutationDeleteBoardCommentArgs>(
    DELETE_BOARD_COMMENT
  );

  // 수정 버튼 클릭
  const onClickUpdate = (): void => {
    setIsEdit(true);
  };

  // 삭제 버튼 클릭
  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>): Promise<void> => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el?._id,
        },

        // refetchQueries를 통해 다시 요청을 보내고 데이터를 받아옴
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });

      alert("삭제되었습니다.");

      // 비밀번호 입력 모달 닫기
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // 비밀번호 입력 모달 오픈
  const onClickOpenDeleteModal = (event: MouseEvent<HTMLButtonElement>): void => {
    setIsOpenDeleteModal(true);
  };

  // 패스워드 입력
  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const onClickDeleteModalToggle = (): void => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  return (
    <>
      {/* 비밀번호입력 모달 */}
      {isOpenDeleteModal && (
        <S.PasswordModal visible={true} onCancel={onClickDeleteModalToggle} onOk={onClickDelete} keyboard={true}>
          <div>비밀번호 입력: </div>
          <form>
            <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
          </form>
        </S.PasswordModal>
      )}

      {!isEdit ? (
        <S.CommentItem key={props.el?._id}>
          {/* 프로필 아이콘 */}
          <S.ProfileIcon src="/images/profile_icon.png" />
          <S.Center>
            <S.InfoWrapper>
              <S.Writer>{props.el?.writer}</S.Writer>
              <S.CommentRate value={props.el?.rating ?? 0} disabled></S.CommentRate>
            </S.InfoWrapper>
            <S.ContentsWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
              <S.CreatedAt>{getDate(props.el?.createdAt)}</S.CreatedAt>
            </S.ContentsWrapper>
          </S.Center>

          <S.ControlButtonWrapper>
            <S.EditButton onClick={onClickUpdate}>
              <S.EditButtonIcon src="/images/edit_icon.png" />
            </S.EditButton>
            <S.DeleteButton id={props.el?._id} onClick={onClickOpenDeleteModal}>
              <S.DeleteButtonIcon src="/images/delete_icon.png" />
            </S.DeleteButton>
          </S.ControlButtonWrapper>
        </S.CommentItem>
      ) : (
        <BoardCommentNew isEdit={isEdit} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
