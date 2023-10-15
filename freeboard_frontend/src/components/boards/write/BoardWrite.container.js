import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardNew(props) {
  const router = useRouter();

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
    // if~else 문으로 작성하게 되면 코드가 너무 길어지므로
    // return을 사용해서 자신을 감싼 함수(onClickUpdate)를 종료해준다.

    // return 의 기능 : 종료하고 값을 반환해줘
    // 1. 함수를 종료
    // 2. 값을 반환 (return 뒤에 작성한 값)
    // => 아래쪽이 실행이 안되도록 해준다.

    //검증
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput = {};

    // 각 값이 있을 경우만 게시글 수정
    if (title) updateVariables.title = title;
    if (contents) updateVariables.contents = contents;

    try {
      // 객체 변수에 담기
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password,
          boardId: router.query.boardId,
        },
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
      // BoardNewPage 에서는 props로 data를 넘겨주고 있지 않음.
      // 그러므로 등록 페이지의 경우 data가 undefined가 된다.
      data={props.data}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );
}
