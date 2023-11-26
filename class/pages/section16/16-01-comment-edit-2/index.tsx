/**
 * 여러개 수정 (1)
 */

import { useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types";
import { useState } from "react";
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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  /**
   * [STUDY MEMO]
   * 여러개를 선택해서 수정하기 위해 state를 배열로 넘김
   */
  const [myIndex, setMyIndex] = useState([false, false, false, false, false, false, false, false, false, false]);

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    /**
     * [STUDY MEMO]
     * myIndex를 스프레드 연산자로 해두지 않으면, 배열이 얕은 복사가 되기때문에 qqq의 값을 바꾸면 바로 바뀌게 된다.
     * 하지만 setMyIndex 를 통해서 바뀐게 아니므로, 리렌더링이 일어나지 않아서
     * 수정하기 버튼을 눌러도 아무 일이 발생하지 않는다.
     * => 스프레스 연산자 사용하여 해결 (원본은 변경하지 않음!!)
     */
    const qqq = [...myIndex];
    qqq[Number(event.currentTarget.id)] = true;
    setMyIndex([...qqq]);
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) =>
        !myIndex[index] ? (
          <div key={el._id}>
            <span style={{ margin: "10px;" }}>{el.title}</span>
            <span style={{ margin: "10px;" }}>{el.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} />
        ),
      )}
    </>
  );
}
