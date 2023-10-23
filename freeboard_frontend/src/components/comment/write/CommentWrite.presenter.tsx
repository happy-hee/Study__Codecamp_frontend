/**
 * 댓글 작성 Presenter
 */
import * as S from "./CommentWrite.styles";
import { ICommentNewUIProps } from "./CommentWrite.types";

export default function CommentNewUI(props: ICommentNewUIProps) {
  return (
    <S.Wrapper>
      <S.Title>댓글</S.Title>
      <S.InputWrapper>
        {/* 작성자/비밀번호/별점 */}
        <S.Writer type="text" placeholder="작성자" onChange={props.onChangeWriter} />
        <S.Password type="password" placeholder="비밀번호" onChange={props.onChangePassword} />
        <input type="text" value="1" onChange={props.onChangeRating} />
        {/* 내용 */}
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
        />
        <S.ContentsFooter>
          <S.TextCount>0/100</S.TextCount>
          <S.CommentButton onClick={props.onClickSubmit}>등록하기</S.CommentButton>
        </S.ContentsFooter>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
