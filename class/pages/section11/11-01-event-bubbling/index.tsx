import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";

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

  const onClickAlert = async (event: MouseEvent<HTMLSpanElement>) => {
    // currentTarget은 태그일 수 밖에 없기때문에 if문(instanceof)을 작성하지 않는다.
    alert(`${event.currentTarget.id}님이 작성한 글입니다.`);
  }

  // const qqq = () => {
  //   alert('클릭!!!')
  // }


  // 내가 선택한 것은 event.target
  // 부모의 onClick 태그는 event.currentTarget
  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el.number} id={el.writer}  onClick={onClickAlert}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          {/* 여기서 qqq를 클릭하면 부모인 div까지 전파되어 onClick(onClickAlert)도 실행이 되어버린다.(propagation: 전파) => 이벤트 버블링 */}
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </>
  );
}
