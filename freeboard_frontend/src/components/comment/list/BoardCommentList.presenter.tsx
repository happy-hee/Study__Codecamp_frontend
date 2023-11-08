/**
 * 댓글 리스트 Presenter
 */
import { getDate } from "../../../commons/libraries/utils";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div>
      {/* 비밀번호입력 모달 */}
      {props.isOpenDeleteModal && (
        <S.PasswordModal
          open={props.isOpenDeleteModal}
          onOk={props.onClickDelete}
          onCancel={props.onClickDeleteModalToggle}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={props.onChangePassword} />
        </S.PasswordModal>
      )}
      <S.Wrapper>
        {props.data?.fetchBoardComments.map((el) => (
          <S.List key={el._id}>
            {/* 프로필 아이콘 */}
            <S.ProfileIcon src="/images/profile_icon.png" />
            <S.Center>
              <S.InfoWrapper>
                <S.Writer>{el.writer}</S.Writer>
                <S.CommentRate value={el.rating ?? 0} disabled></S.CommentRate>
              </S.InfoWrapper>
              <S.ContentsWrapper>
                <S.Contents>{el.contents}</S.Contents>
                <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
              </S.ContentsWrapper>
            </S.Center>

            <S.ControlButtonWrapper>
              <S.EditButton>
                <S.EditButtonIcon src="/images/edit_icon.png" />
              </S.EditButton>
              <S.DeleteButton id={el._id} onClick={props.onClickDeleteModal}>
                <S.DeleteButtonIcon src="/images/delete_icon.png" />
              </S.DeleteButton>
            </S.ControlButtonWrapper>
          </S.List>
        ))}
      </S.Wrapper>
    </div>
  );
}
