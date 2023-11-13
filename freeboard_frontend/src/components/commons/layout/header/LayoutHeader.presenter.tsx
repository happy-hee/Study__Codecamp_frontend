import * as S from "./LayoutHeader.styles"

export default function LayoutHeaderUI() {
  return(
    <S.Wrapper>
    <S.Logo src="/images/logo.png" />
    <S.SignWrapper>
      <S.SignUpButton>로그인</S.SignUpButton>
      <S.SignInButton>회원가입</S.SignInButton>
    </S.SignWrapper>
  </S.Wrapper>
  )
}