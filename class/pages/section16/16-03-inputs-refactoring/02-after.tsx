import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($writer: String, $titlevent: String, $contents: String) {
    createBoard(writer: $writer, titlevent: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        // writer,
        // title,
        // contents,
        ...inputs,
      },
    });
    console.log(result);
  };

  const onChangeInputs = (event: any) => {
    setInputs((prev) => ({
      ...prev,
      // writer: inputs.writer,
      // title: inputs.title,
      // contents: inputs.contents,

      // event.target.id를 key 로 사용하려면 대괄호로 감싸줘야 함
      // event.target.id: input에 id로 준 것들을 이벤트로 불러옴
      [event.target.id]: event.target.value, // 덮어쓰기
    }));
  };

  return (
    <div>
      작성자 : <input type="text" id="writer" onChange={onChangeInputs} />
      제목 : <input type="text" id="title" onChange={onChangeInputs} />
      내용 : <input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
