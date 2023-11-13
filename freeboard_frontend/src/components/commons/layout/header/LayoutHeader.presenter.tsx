import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.Logo src="/images/logo.png" onClick={props.onClickLogo} alt="로고" />
        <S.SignWrapper>
          <S.SignInButton onClick={props.onClickMoveToSignIn}>로그인</S.SignInButton>
          <S.SignUpButton onClick={props.onClickMoveToSignUp}>회원가입</S.SignUpButton>
        </S.SignWrapper>
      </S.Inner>
    </S.Wrapper>
  );
}
