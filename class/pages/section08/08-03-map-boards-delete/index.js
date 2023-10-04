import { useQuery, useMutation, gql } from "@apollo/client";

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

// 삭제
const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int) {
        deleteBoard(number: $number) {
            message
        }
    }
`;

export default function StaticRoutingMovedPage() {
    // API 요청 후 받아온 데이터를 data 에 넣어준다.
    const { data } = useQuery(FETCH_BOARDS);
    // console.log(data?.fetchBoards);

    const [deleteBoard] = useMutation(DELETE_BOARD);

    // const mystyles= {
    //     margin: "10px"
    // }

    const onClickDelete = (e) => {
        Number(e.target.id);
        deleteBoard({
            variables: { number: Number(e.target.id) },
            // refetchQueries를 통해 다시 요청을 보내고 데이터를 받아옴
            refetchQueries: [{ query: FETCH_BOARDS }],
        });
    };

    return (
        <>
            {data?.fetchBoards.map((el) => (
                <div key={el.number}>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: "10px;" }}>{el.number}</span>
                    <span style={{ margin: "10px;" }}>{el.title}</span>
                    <span style={{ margin: "10px;" }}>{el.writer}</span>
                    <span>
                        <button id={el.number} onClick={onClickDelete}>
                            삭제
                        </button>
                    </span>
                </div>
            ))}
        </>
    );
}
