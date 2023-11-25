/**
 * Pagination Presenter
 */

import { IPaginationUIProps } from "./Pagination.types";

import * as S from "./Pagination.styles";

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <>
      <S.Pagination>
        <S.PrevButton onClick={props.onClickPrev}>{`<`}</S.PrevButton>
        <S.PageButtonWrapper>
          {new Array(10).fill(1).map((_, index) => (
            <S.PageButton
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              isActive={index + props.startPage === props.recentPage ? true : false}
            >
              {index + props.startPage}
            </S.PageButton>
          ))}
        </S.PageButtonWrapper>
        <S.NextButton onClick={props.onClickNext}>{`>`}</S.NextButton>
        <S.LastButton onClick={props.onClickLast}>{`>>`}</S.LastButton>
      </S.Pagination>
    </>
  );
}
