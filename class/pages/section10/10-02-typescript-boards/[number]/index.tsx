/**
 * 상세페이지
 */

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

// 조회
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();

  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });
  console.log(data);

  const onClickMove = () => {
    try {
      // boardId가 string이 아닐 경우 대비 얼럿
      if (typeof router.query.number !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }

      void router.push(`/section10/10-02-typescript-boards/${router.query.number}/edit`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <div>{router.query.number}번 게시글 이동이 완료되었습니다.</div>
      {/* 논리 연산자를 이용한 조건부 랜더링 : aaa, bbb, ccc, ddd, eee, hhh */}
      <div>작성자: {data?.fetchBoard?.writer}</div>
      {/* 옵셔널 체이닝을 이용한 조건부 랜더링 */}
      {/* 옵셔널 체이닝은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환한다.  */}
      <div>제목: {data?.fetchBoard?.title}</div>
      {/* 3항 연산자 사용하여 데이터가 들어오기 전 표시해주기 */}
      <div>내용: {data ? data.fetchBoard?.contents : "로딩중입니다."}</div>

      <button onClick={onClickMove}>수정하러가기</button>
    </div>
  );
}
