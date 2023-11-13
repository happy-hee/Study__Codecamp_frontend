import * as S from "./LayoutNavigation.styles";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <S.Wrapper>
      <S.NavWrapper>
        <S.NavList onClick={props.onclickMoveToBoard} className="active">
          자유게시판
        </S.NavList>
        <S.NavList onClick={props.onclickMoveToMarket}>중고마켓</S.NavList>
        <S.NavList onClick={props.onclickMoveToMypage}>마이페이지</S.NavList>
      </S.NavWrapper>
    </S.Wrapper>
  );
}
