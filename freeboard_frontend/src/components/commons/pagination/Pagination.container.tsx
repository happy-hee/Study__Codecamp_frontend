/**
 * Pagination Container
 */
import { MouseEvent, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_COUNT } from "./Pagination.query";
import { IQuery, IQueryFetchBoardsCountArgs } from "../../../commons/types/generated/types";
import { IPaginationProps } from "./Pagination.types";

export default function Pagination(props: IPaginationProps) {
  // 게시글 갯수
  const { data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(
    FETCH_BOARDS_COUNT,
  );
  // 시작 페이지
  const [startPage, setStartPage] = useState(1);
  // 현재 페이지
  const [recentPage, setRecentPage] = useState(1);

  // 마지막 페이지 (전체 게시글 갯수를 10으로 나눈 뒤 그걸 반올림)
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  // 페이지 클릭
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void props.refetch({ page: Number(event.currentTarget.id) });
    // 현재 페이지 저장
    setRecentPage(Number(event.currentTarget.id));
  };

  // 이전 페이지 버튼 클릭
  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  // 다음 페이지 버튼 클릭
  const onClickNext = () => {
    // 현재 페이지 + 10이 마지막 페이지보다 작거나 같을 경우만 setStartPage 실행
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  // 마지막 페이지 버튼 클릭
  const onClickLast = () => {
    setStartPage(lastPage - 9);
    void props.refetch({ page: lastPage - 9 });
  };

  return (
    <>
      <PaginationUI
        onClickPage={onClickPage}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        onClickLast={onClickLast}
        startPage={startPage}
        recentPage={recentPage}
      />
    </>
  );
}
