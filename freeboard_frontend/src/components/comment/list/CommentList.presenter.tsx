/**
 * 댓글 리스트 Presenter
 */
import { getDate } from "../../../../src/commons/libraries/utils";
import * as S from "./CommentList.styles";
import { ICommentListUIProps } from "./CommentList.types";

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <S.Wrapper>
      {props.data?.fetchBoardComments.map((el) => (
        <S.List key={el._id}>
          {/* 프로필 아이콘 */}
          <S.ProfileIcon src="/images/profile_icon.png" />
          <S.Center>
            <S.InfoWrapper>
              <S.Writer>{el.writer}</S.Writer>
              <S.Rating>{el.rating}</S.Rating>
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
            <S.DeleteButton id={el._id} onClick={props.onClickDelete}>
              <S.DeleteButtonIcon src="/images/delete_icon.png" />
            </S.DeleteButton>
          </S.ControlButtonWrapper>
        </S.List>
      ))}
    </S.Wrapper>
  );
}
