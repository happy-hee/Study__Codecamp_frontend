import { useQuery, gql } from "@apollo/client";

// 조회
const FETCH_BOARDS = gql`
    query {
        fetchBoards {
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

    // const mystyles= {
    //     margin: "10px"
    // }

    return (
        <>
            {data?.fetchBoards.map((el) => (
                <div>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: "10px;" }}>{el.number}</span>
                    <span style={{ margin: "10px;" }}>{el.title}</span>
                    <span style={{ margin: "10px;" }}>{el.writer}</span>
                </div>
            ))}
        </>
    );
}
