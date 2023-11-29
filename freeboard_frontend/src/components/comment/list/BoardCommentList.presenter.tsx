/**
 * 댓글 리스트 Presenter
 */

import CommentItem from "../../units/comment/CommentItem.container";

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
          <CommentItem key={el._id} el={el} onClickDeleteModal={props.onClickDeleteModal} />
        ))}
      </S.Wrapper>
    </div>
  );
}
