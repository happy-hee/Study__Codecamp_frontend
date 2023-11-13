import * as S from "./LayoutNavigation.styles"

export default function LayoutNavigationUI() {
  return(
    <S.Wrapper>
      <S.NavWrapper>
        <S.NavList className="active">자유게시판</S.NavList>
        <S.NavList>중고마켓</S.NavList>
        <S.NavList>마이페이지</S.NavList>
      </S.NavWrapper>
    </S.Wrapper>
  )
}