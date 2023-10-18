/**
 * 수정페이지
 */
import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

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

export default function GraphqlMutationPage() {
  const router = useRouter();

  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return (
    <div>
      <div> ############## 여기는 페이지 입니다. ############## </div>
      <BoardWrite isEdit={true} data={data} />
      <div> ############## 여기는 페이지 입니다. ############## </div>
    </div>
  );
}
