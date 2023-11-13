import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: #ffd600;
`;

export const NavWrapper = styled.ul`
  display: flex;
  justify-content: center;
`;
export const NavList = styled.li`
  position: relative;
  padding: 0 40px;
  color: #ab9000;
  font-weight: 500;
  cursor: pointer;

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
