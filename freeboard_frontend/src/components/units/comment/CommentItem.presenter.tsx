import { getDate } from "../../../commons/libraries/utils";
import * as S from "./CommentItem.styles";
import { ICommentItemUIProps } from "./CommentItem.types";

export default function CommentItemUI(props: ICommentItemUIProps) {
  return (
    <div>
      <S.List key={props.el?._id}>
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
          <S.EditButton onClick={props.onClickEdit}>
            <S.EditButtonIcon src="/images/edit_icon.png" />
          </S.EditButton>
          <S.DeleteButton id={props.el?._id} onClick={props.onClickDeleteModal}>
            <S.DeleteButtonIcon src="/images/delete_icon.png" />
          </S.DeleteButton>
        </S.ControlButtonWrapper>
      </S.List>
    </div>
  );
}
