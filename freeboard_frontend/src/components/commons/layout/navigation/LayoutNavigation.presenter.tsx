import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const navList = [
  { page: "/opanapi", name: "랜덤 색상" },
  { page: "/boards", name: "자유게시판" },
  { page: "/market", name: "중고마켓" },
  { page: "/mypage", name: "마이페이지" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <S.Wrapper>
      <S.NavWrapper>
        {navList.map((el) => (
          <S.NavList id={el.page} onClick={props.onClickNavMenu} key={el.page}>
            {el.name}
          </S.NavList>
        ))}
      </S.NavWrapper>
    </S.Wrapper>
  );
}
