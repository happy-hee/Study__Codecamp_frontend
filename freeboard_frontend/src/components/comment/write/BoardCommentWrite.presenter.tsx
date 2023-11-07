/**
 * 댓글 작성 Presenter
 */
import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentNewUIProps } from "./BoardCommentWrite.types";
import { Rate } from "antd";

export default function BoardCommentNewUI(props: IBoardCommentNewUIProps) {
  return (
    <S.Wrapper>
      <S.Title>댓글</S.Title>
      <S.InputWrapper>
        {/* 작성자/비밀번호/별점 */}
        <S.Writer type="text" placeholder="작성자" onChange={props.onChangeWriter} />
        <S.Password type="password" placeholder="비밀번호" onChange={props.onChangePassword} />
        <Rate onChange={props.onChangeRating} value={props.rating} />
        {/* 내용 */}
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
        />
        <S.ContentsFooter>
          <S.TextCount>0/100</S.TextCount>
          <S.BoardCommentButton onClick={props.onClickSubmit}>등록하기</S.BoardCommentButton>
        </S.ContentsFooter>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
