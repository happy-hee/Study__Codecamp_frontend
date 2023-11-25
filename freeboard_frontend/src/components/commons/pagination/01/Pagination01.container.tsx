/**
 * Pagination01 Container
 */
import { MouseEvent, useState } from "react";
import Pagination01UI from "./Pagination01.presenter";
import { IPagination01Props } from "./Pagination01.types";

export default function Pagination01(props: IPagination01Props) {
  // 시작 페이지
  const [startPage, setStartPage] = useState(1);
  // 현재 페이지
  const [activePage, setActivePage] = useState(1);

  // 마지막 페이지 (전체 게시글 갯수를 10으로 나눈 뒤 그걸 반올림)
  const lastPage = Math.ceil((props.count ?? 10) / 10);

  // 페이지 클릭
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void props.refetch({ page: Number(event.currentTarget.id) });
    // 현재 페이지 저장
    setActivePage(Number(event.currentTarget.id));
  };

  // 이전 페이지 버튼 클릭
  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  // 다음 페이지 버튼 클릭
  const onClickNextPage = (): void => {
    // 현재 페이지 + 10이 마지막 페이지보다 작거나 같을 경우만 setStartPage 실행
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivePage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  // 마지막 페이지 버튼 클릭
  const onClickLastPage = () => {
    setStartPage(lastPage);
    void props.refetch({ page: lastPage });
  };

  return (
    <>
      <Pagination01UI
        onClickPage={onClickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        onClickLastPage={onClickLastPage}
        startPage={startPage}
        lastPage={lastPage}
        activePage={activePage}
      />
    </>
  );
}
