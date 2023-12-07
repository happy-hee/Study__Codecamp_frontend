import { addDoc, collection, getDocs, getFirestore, DocumentData } from "firebase/firestore/lite";
import { ChangeEvent, useState } from "react";
import { firebaseApp } from "../../../commons/libraries/firebase";
import MyfirebaseUI from "./Myfirebase.presenter";

export default function Myfirebase() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  /**
   * 등록하기
   */
  const onClickSubmit = async (): Promise<void> => {
    // firebase 앱 정보를 가지고 와서, 게시판 컬렉션을 조회
    const board = collection(getFirestore(firebaseApp), "board");

    // 게시판 컬렉션에서 문서 추가
    // addDoc(컬렉션, {키 / value})
    await addDoc(board, {
      writer,
      title,
      contents,
    });

    alert("등록되었습니다.");
  };

  /**
   * 조회하기
   */
  const onClickFetch = async (): Promise<void> => {
    // firebase 앱 정보를 가지고 와서, 게시판 컬렉션을 조회
    const board = collection(getFirestore(firebaseApp), "board");

    // 조회해온 데이터를 변수에 담음
    const result = await getDocs(board);

    // board 컬렉션의 데이터들을 조회
    const datas = result.docs.map((el) => el.data());
    setDataBoards(datas);

    alert("조회되었습니다.");
  };

  return (
    <MyfirebaseUI
      dataBoards={dataBoards}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickFetch={onClickFetch}
    />
  );
}
