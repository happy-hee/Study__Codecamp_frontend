/**
 * 09-boards 작성 - 컨테이너
 */

// 컨테이너 컴포넌트
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘세팅, UPDATE_BOARD } from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter"; //
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘세팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  // 게시물 등록
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer, // writer state 를 넣음
        title: title, // title state 를 넣음
        contents: contents, // contents state 를 넣음
      },
    });
    console.log(result);

    // 상세페이지로 이동
    // 게시글 번호 : result.data.createBoard.number
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
  };

  // 게시물 수정
  const onClickUpdate = async () => {
    // 여기서 수정하기 하자!!
    const result = await updateBoard({
      variables: {
        // router.query.number 은 주소창에서 가져온 값 -> 문자열
        // 그래서 이걸 숫자로 바꿔줘야 함 (Number(router.query.number)
        number: Number(router.query.number),
        writer,
        title,
        contents,
      },
    });
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <div>
      <div> $$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$$</div>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        isEdit={props.isEdit}
      />
      <div> $$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$$ </div>
    </div>
  );
}
