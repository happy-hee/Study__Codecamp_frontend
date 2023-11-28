import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer, // writer state 를 넣음
        title, // title state 를 넣음
        contents, // contents state 를 넣음
      },
    });
    console.log(result);
  };

  const onChangeWriter = (e: any) => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e: any) => {
    setContents(e.target.value);
  };

  return (
    <div>
      작성자 : <input type="text" onChange={onChangeWriter} />
      제목 : <input type="text" onChange={onChangeTitle} />
      내용 : <input type="text" onChange={onChangeContents} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
