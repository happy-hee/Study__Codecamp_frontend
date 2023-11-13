import styled from "@emotion/styled";

export default function LayoutHeader() {
  const Wrapper = styled.div`
    padding: 54px;
    display: flex;
    justify-content: space-between;
  `;
  const Logo = styled.img``;
  const SignWrapper = styled.div`
    display: flex;
  `;
  const SignUpButton = styled.button`
    font-size: 16px;
    padding: 10px 16px;
    cursor: pointer;
    font-family: "NotoSans";
    font-weight: 700;
  `;
  const SignInButton = styled.button`
    font-size: 16px;
    background-color: #ffd600;
    padding: 10px 16px;
    border-radius: 10px;
    cursor: pointer;
    font-family: "NotoSans";
    font-weight: 700;
    margin-left: 4px;
  `;

  return (
    <Wrapper>
      <Logo src="/images/logo.png" />
      <SignWrapper>
        <SignUpButton>로그인</SignUpButton>
        <SignInButton>회원가입</SignInButton>
      </SignWrapper>
    </Wrapper>
  );
}
