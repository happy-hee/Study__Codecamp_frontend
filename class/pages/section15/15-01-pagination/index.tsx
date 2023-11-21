import { useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types";
import type { MouseEvent } from "react";

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

export default function StaticRoutingMovedPage() {
  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  /**
   * [STUDY MEMO]
   * refetch 는 API를 요청하는 것이기 때문에 async / await 을 붙이는 경우가 많다.
   * 그런데 아래와 같은 경우는 불러온 뒤 console을 찍는다던가 결과를 변수에 담는다던가는 하지 않는다.
   * (그냥 refetch를 해서 다시 불러오는 것 뿐)
   * => 기다릴 필요가 없다. 그러므로 async / await을 붙이지 않아도 된다.
   */
  // const onClickPage1 = async (): void => {
  //   await refetch({ page: 1 });
  // };

  // const onClickPage1 = (): void => {
  //   void refetch({ page: 1 });
  // };
  // const onClickPage2 = (): void => {
  //   void refetch({ page: 2 });
  // };
  // const onClickPage3 = (): void => {
  //   void refetch({ page: 3 });
  // };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    /**
     * [STUDY MEMO]
     * 1. event.currentTarget은 태그일 수 밖에 없기때문에 if문(instanceof)을 작성하지 않아도 된다.
     *    만약 event.target을 하게 되면? 해당 부분이 태그인지 알 수 없기 때문에
     *    if (e.target instanceof HTMLSpanElement) 이런식으로 if 문을 작성해줘야 한다.
     *
     * 2. Number를 붙이는 이유: page의 값은 Int 로 들어가야 하는데,
     *    currentTarget으로 id 값을 가져올 때엔 무조건 문자열로 오기때문에
     *    앞에 Number를 붙여서 숫자형으로 만들어준다.
     */
    void refetch({ page: Number(event.currentTarget.id) });
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

      {
        // 처음 코드
        // <span id="1" onClick={onClickPage}>1</span>
        // <span id="2" onClick={onClickPage}>2</span>
        // <span id="3" onClick={onClickPage}>3</span>

        // 개선 1)
        // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        //   <span key={el} id={String(el)} onClick={onClickPage}>
        //     {el}
        //   </span>
        // ))

        // 개선 2)
        /**
         * [STUDY MEMO]
         * 1. map(el, index) 부분에서 el처럼 해당 부분을 사용하지 않는 경우는 언더바(_)로 표기한다.
         * 2. index를 사용하기 때문에 배열 안에 들어있는 값들은 '갯수'만 상관있다.
         */
        // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        //   <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
        //     {index + 1}
        //   </span>
        // ))

        // 개선 3)
        /**
         * [STUDY MEMO]
         * new Array(10).fill(1) 코드 해석:
         * 길이가 10개로 채워진 배열을 생성하고, 그 값들을 모두 1로 채운다.
         */
        new Array(10).fill(1).map((_, index) => (
          <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </span>
        ))
      }
    </>
  );
}
