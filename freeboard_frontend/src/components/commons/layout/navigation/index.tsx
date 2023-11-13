import styled from "@emotion/styled";

export default function LayoutNavigation() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    background-color: #ffd600;
  `;

  const NavWrapper = styled.ul`
    display: flex;
    justify-content: center;
  `;
  const NavList = styled.li`
    position: relative;
    padding: 0 40px;
    color: #ab9000;
    font-weight: 500;

    &.active {
      color: #000;
      font-weight: 700;
    }

    &:last-child::after {
      display: none;
    }

    &::after {
      position: absolute;
      right: 0;
      display: inline-block;
      content: "";
      width: 1px;
      height: 20px;
      background-color: #fff;
    }
  `;

  return (
    <Wrapper>
      <NavWrapper>
        <NavList className="active">자유게시판</NavList>
        <NavList>중고마켓</NavList>
        <NavList>마이페이지</NavList>
      </NavWrapper>
    </Wrapper>
  );
}
