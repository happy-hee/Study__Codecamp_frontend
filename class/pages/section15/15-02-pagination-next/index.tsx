import { useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types";
import { useState, type MouseEvent } from "react";

// 조회
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  /**
   * [STUDY MEMO]
   * 이전/다음페이지를 만들기 위해 첫 페이지를 1로 지정해주고,
   * startPage, setStartPage 를 사용해 달라질 수 있도록 한다.
   */
  const [startPage, setStartPage] = useState(1);

  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  // 이전 페이지 클릭
  const onClickPrevPage = (): void => {
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  // 다음 페이지 클릭
  const onClickNextPage = (): void => {
    setStartPage(startPage + 10);
    void refetch({ page: startPage + 10 });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px;" }}>{el._id}</span>
          <span style={{ margin: "10px;" }}>{el.title}</span>
          <span style={{ margin: "10px;" }}>{el.writer}</span>
        </div>
      ))}

      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + startPage} id={String(index + startPage)} onClick={onClickPage}>
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
    </>
  );
}
