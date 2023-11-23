import styled from "@emotion/styled";

export default function LayoutHeader(): JSX.Element {
  const Wrapper = styled.div`
    height: 50px;
    background-color: #d74532;
  `;

  return <Wrapper>헤더 영역</Wrapper>;
}
