import { useQuery, gql } from "@apollo/client";
import Checkbox from "./checkbox";

// 조회
const FETCH_BOARDS = gql`
  query {
    fetchBoards(page: 4) {
      number
      writer
      title
    }
  }
`;

export default function StaticRoutingMovedPage() {
  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const qqq1 = () => {
    alert("클릭1");
  };
  const qqq4 = () => {
    alert("클릭4");
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.number} id={el.writer} onClick={qqq1}>
          {/** <span onClick={qqq2}>
            아래 input(qqq3)을 클릭했을 시 실행되는 것: qqq3, qqq2, qqq1
            qqq4는 input의 상위 태그가 아니라 상위 span 태그의 형제 요소이다.
            그러므로 qqq4는 실행되지 않는다.
          <input onClick={qqq3} type="checkbox" />
          </span> */}

          {/* import 해와도 이벤트 버블링은 발생한다. */}
          <Checkbox />
          <span onClick={qqq4} style={{ margin: "10px" }}>
            {el.number}
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
        </div>
      ))}
    </>
  );
}
