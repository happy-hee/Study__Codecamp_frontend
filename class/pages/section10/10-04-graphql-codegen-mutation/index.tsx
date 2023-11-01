import { useMutation, gql } from "@apollo/client";
import { IMutation, IMutationCreateBoardArgs } from "../../../src/commons/types/generated/types";

const 나의그래프큐엘세팅 = gql`
  # 변수의 타입을 꼭 입력해주어야 한다.
  mutation createBoard($writer: String, $title: String, $contents: String) {
    # grayql 에서 변수는 $ 이다. (앞에 $ 를 표시)
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  // const [counter, setCounter] = useState<number>(0)

  // const [나의함수] = useMutation<결과타입, 변수타입>(나의그래프큐엘세팅);
  // codegen을 통해 가져온 파일에서, IMutation 안의 createBoard 부분만 사용
  const [나의함수] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      // createBoard 안에 넣는 부분들
      variables: {
        // variables 이게 $ 역할을 한다.
        writer: "훈이",
        title: "안녕하세요.",
        contents: "내용입니다.",
      },
    });

    // ?. 를 사용해서 뭘 사용할 수 있는지를 알 수 있음
    // data?.createBoard?.;
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
