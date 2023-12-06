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
    const board = collection(getFirestore(firebaseApp), "board");
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
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
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
