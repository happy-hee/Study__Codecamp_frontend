import { useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../src/commons/types/generated/types";
import type { MouseEvent } from "react";
import { useState } from "react";

// 게시글 조회
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

// 게시글 갯수 조회
const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  /**
   * [STUDY MEMO]
   * 이전/다음페이지를 만들기 위해 첫 페이지를 1로 지정해주고,
   * startPage, setStartPage 를 사용해 달라질 수 있도록 한다.
   */
  const [startPage, setStartPage] = useState(1);

  // 게시글 불러오기
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  // 게시글 갯수 불러오기
  const { data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARDS_COUNT);

  /**
   * [STUDY MEMO]
   * 1) 게시글의 갯수만큼 페이지가 보여지도록 하려면?
   *     게시글 갯수 / 페이지당 보여지는 글 수 = 나온 값을 반올림
   * 2) dataBoardsCount?.fetchBoardsCount 는 처음에 undefined 이므로,
   *     뒤에 ?? 10 을 넣어서 undefined면 10을 넣어주도록 한다.
   */
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  // 페이지 클릭시 이동
  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  // 이전 페이지 클릭
  const onClickPrevPage = (): void => {
    if (startPage === 1) return; // 첫페이지가 1일 경우 return (마이너스 방지)
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  // 다음 페이지 클릭
  const onClickNextPage = (): void => {
    // 첫 페이지 + 10을 한게 마지막 페이지보다 커질 경우는
    // 다음 페이지 클릭 시에도 페이지 이동이 동작하지 않도록 작업
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
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

      {new Array(10).fill(1).map(
        /**
         * [STUDY MEMO]
         * 화살표 함수의 괄호() 는 return 문을 만나지 않아도 return 한다.
         * 중괄호{}는 return 을 명시하고 값을 작성해줘야한다.
         */
        (_, index) =>
          /**
           * [STUDY MEMO]
           * 논리적 AND (&&) : 첫 거짓 같은 피연산자를 만나면 즉시 그 값을 반환
           * 여기선 앞의 값이 계속 true 이기 때문에 뒤의 값이 나오다가,
           * 마지막 페이지보다 index + startPage 가 커진 경우 falsy한 값이 되기때문에
           * 뒤의 코드가 실행되지 않으면서 span 태그를 생성하지 않는다.
           */
          // index + startPage가 마지막 페이지보다 같거나 작을때까지만 뒤의 태그를 return
          index + startPage <= lastPage && (
            <span key={index + startPage} id={String(index + startPage)} onClick={onClickPage} style={{ margin: "5px" }}>
              {index + startPage}
            </span>
          ),
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </>
  );
}
