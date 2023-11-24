// ## 1. 페이지네이션 구현하기

// [문제 8] 이전("<") 버튼과 다음(">") 버튼을 클릭했을 때 더이상 이동할 수 있는 페이지가 없다면 무시하도록 만들어 주세요. 추가로, 버튼에 비활성화 표시를 적용해 주세요.
// 힌트) Emotion에 props로 isActive를 전달합니다.
// => 모르겠음

import { useQuery } from "@apollo/client";
// [문제 1] Playground를 참고하여, 게시글 목록(fetchBoards) API를 요청해 주세요.
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Pagination.query";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../src/commons/types/generated/types";
import { MouseEvent, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { IPaginationProps } from "./Pagination.types";

export default function Pagination(props: IPaginationProps) {
  // API 요청 후 받아온 데이터를 data 에 넣어주고, refetch를 사용한다.
  // 게시글 불러오기
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  // 게시글 갯수 불러오기
  const { data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);
  // 시작 페이지 state
  const [startPage, setStartPage] = useState(1);
  // 현재 페이지 state
  const [recentPage, setResentPage] = useState(1);
  // 마지막 페이지
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  console.log(dataBoardsCount);

  // [문제 4] 해당 page를 클릭하면, page에 맞는 데이터를 불러오도록 만들어 보세요.
  // 페이지 클릭
  const onClickPage = (event: MouseEvent<HTMLButtonElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
    // 현재 페이지 설정
    setResentPage(Number(event.currentTarget.id));
  };

  // [문제 6] 페이지 번호에 이전("<") 버튼과 다음(">") 버튼을 만들고,
  // 이전을 클릭하면 10개 이전 페이지로, 다음을 클릭하면 10개 이후의 페이지로 이동해 보세요.
  // 물론, 페이지 이동시 해당 페이지에 맞는 데이터를 불러와야 합니다.

  // 이전 페이지 클릭
  const onClickPrevPage = (): void => {
    // 첫 페이지가 1일 경우는 바로 return (마이너스 페이지 방지)
    if (startPage === 1) return;

    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  // 다음 페이지 클릭
  const onClickNextPage = (): void => {
    // [문제 7] 페이지 10개 중, 마지막 페이지가 77 페이지라면, 나머지 78 79 80 페이지는 화면에 보이지 않도록 만들어 주세요.
    // 시작 페이지 + 10이 마지막 페이지보다 작거나 같을 때만 Page에 10을 더해줌
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  // 마지막 페이지 클릭
  const onClickLastPage = (): void => {
    setStartPage(lastPage);
    void refetch({ page: lastPage });
  };

  return (
    <PaginationUI
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickLastPage={onClickLastPage}
      data={data}
      recentPage={recentPage}
      startPage={startPage}
      lastPage={lastPage}
    />
  );
}
