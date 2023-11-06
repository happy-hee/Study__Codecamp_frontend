import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          {/* writer가 undefined나 null 이면 빈 문자열 넣기(?? 사용) */}
          {/* readOnly 부분에 boolean값이 들어가야 하므로 !!를 사용해서 명시적으로 표현 */}
          <S.Writer
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            readOnly={!!props.data?.fetchBoard.writer}
          ></S.Writer>
          <S.ErrorMessage>{props.errorWriter}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password type="password" placeholder="비밀번호를  입력해주세요." onChange={props.onChangePassword}></S.Password>
          <S.ErrorMessage>{props.errorPassword}</S.ErrorMessage>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject type="text" placeholder="제목을  작성해주세요." onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}></S.Subject>
        <S.ErrorMessage>{props.errorTitle}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents placeholder="내용을 작성해주세요." onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents} />
        <S.ErrorMessage>{props.errorContents}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipcodeWrapper>
          <S.Zipcode value={props.zipcode} placeholder="우편번호" />
          <S.SearchButton onClick={props.onClickPostcode}>우편번호 검색</S.SearchButton>
        </S.ZipcodeWrapper>
        <S.Address value={props.address} />
        <S.Address onChange={props.onChangeAddressDetail} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube placeholder="링크를 복사해주세요." />
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진첨부</S.Label>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인설정</S.Label>
        <S.RadioButton type="radio" id="youtube" name="radio-button" />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" id="image" name="radio-button" />
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit} isActive={props.isEdit ? true : props.isActive}>
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
