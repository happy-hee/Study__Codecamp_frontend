/**
 * 댓글 작성 Presenter
 */
import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentNewUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentNewUI(props: IBoardCommentNewUIProps) {
  console.log(props.el?.writer);

  return (
    <S.Wrapper>
      {!props.isEdit ? <S.Title>댓글</S.Title> : <></>}
      <S.InputWrapper>
        {/* 작성자/비밀번호/별점 */}
        <S.Writer
          type="text"
          id="writer"
          placeholder="작성자"
          onChange={props.onChangeInputs}
          value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
          readOnly={!!props.el?.writer}
        />
        <S.Password
          type="password"
          id="password"
          placeholder="비밀번호"
          onChange={props.onChangeInputs}
          value={props.password}
        />
        <S.CommentRate
          id="rating"
          onChange={props.onChangeRating}
          value={props.rating !== 3 ? props.rating : props.el?.rating ?? 3}
        />
        {/* 내용 */}
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          id="content"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
          value={props.contents !== "" ? props.contents : props.el?.contents ?? ""}
        />
        <S.ContentsFooter>
          <S.TextCount>0/100</S.TextCount>
          <S.BoardCommentButton
            id={props.el?._id}
            onClick={!props.isEdit ? props.onClickSubmit : props.onClickUpdate}
            isEdit={props.isEdit}
          >
            {!props.isEdit ? "등록" : "수정"}하기
          </S.BoardCommentButton>
        </S.ContentsFooter>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
