/**
 * Pagination01 Presenter
 */

import { IPagination01UIProps } from "./Pagination01.types";

import * as S from "./Pagination01.styles";

export default function Pagination01UI(props: IPagination01UIProps) {
  return (
    <>
      <S.Pagination>
        <S.PrevButton onClick={props.onClickPrevPage}>{`<`}</S.PrevButton>
        <S.PageButtonWrapper>
          {new Array(10).fill(1).map(
            (_, index) =>
              // 현재 페이지가 마지막 페이지보다 작거나 같을 때까지만 표시
              index + props.startPage <= props.lastPage && (
                <S.PageButton
                  key={index + props.startPage}
                  id={String(index + props.startPage)}
                  onClick={props.onClickPage}
                  isActive={index + props.startPage === props.activePage}
                >
                  {index + props.startPage}
                </S.PageButton>
              ),
          )}
        </S.PageButtonWrapper>
        <S.NextButton onClick={props.onClickNextPage}>{`>`}</S.NextButton>
        <S.LastButton onClick={props.onClickLastPage}>{`>>`}</S.LastButton>
      </S.Pagination>
    </>
  );
}
