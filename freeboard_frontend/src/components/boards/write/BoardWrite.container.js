import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD, FETCH_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardNew(props) {
  const router = useRouter();

  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  // 데이터 State
  const [writer, setWriter] = useState(""); // 이름
  const [password, setPassword] = useState(""); //비밀번호
  const [title, setTitle] = useState(""); // 제목
  const [contents, setContents] = useState(""); //내용
  const [createBoard] = useMutation(CREATE_BOARD); // 게시글 등록 Mutation
  const [updateBoard] = useMutation(UPDATE_BOARD);

  // 에러메세지
  const [errorWriter, setErrorWriter] = useState(""); // 이름
  const [errorPassword, setErrorPassword] = useState(""); //비밀번호
  const [errorTitle, setErrorTitle] = useState(""); // 제목
  const [errorContents, setErrorContents] = useState(""); //내용
  const [isActive, setIsActive] = useState(false);

  // 데이터 저장
  function onChangeWriter(e) {
    // 이름
    setWriter(e.target.value);
    if (e.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (e.target.value !== "") {
      setErrorWriter("");
    }
  }
  function onChangePassword(e) {
    //비밀번호
    setPassword(e.target.value);
    if (e.target.value && writer && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (e.target.value !== "") {
      setErrorPassword("");
    }
  }
  function onChangeTitle(e) {
    //제목
    setTitle(e.target.value);
    if (e.target.value && writer && password && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (e.target.value !== "") {
      setErrorTitle("");
    }
  }
  function onChangeContents(e) {
    //내용
    setContents(e.target.value);
    if (e.target.value && writer && password && title) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    if (e.target.value !== "") {
      setErrorContents("");
    }
  }

  // 게시글 등록
  const onClickSubmit = async () => {
    // 데이터 빈칸 검증
    if (!writer) {
      setErrorWriter("이름을 입력해주세요.");
    }
    if (!password) {
      setErrorPassword("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setErrorTitle("제목을 입력해주세요.");
    }
    if (!contents) {
      setErrorContents("내용을 입력해주세요.");
    }

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              // shorthand-property
              // 객체에서 key 와 value 의 이름이 같다면 생략 가능
              writer,
              password,
              title,
              contents,
            },
          },
        });

        alert("등록되었습니다.");
        // 상세페이지로 이동
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  // 게시글 수정
  const onClickUpdate = async () => {
    try {
      // 객체 변수에 담기
      const updateVariables = {
        updateBoardInput: {},
        password: password,
        boardId: router.query.boardId,
      };

      // 각 값이 있을 경우만 게시물 수정
      if (title) updateVariables.updateBoardInput.title = title;
      if (contents) updateVariables.updateBoardInput.contents = contents;

      const result = await updateBoard({
        variables: updateVariables,
      });

      // 상세페이지로 이동
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      errorWriter={errorWriter}
      onChangePassword={onChangePassword}
      errorPassword={errorPassword}
      onChangeTitle={onChangeTitle}
      errorTitle={errorTitle}
      onChangeContents={onChangeContents}
      errorContents={errorContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      data={data}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
