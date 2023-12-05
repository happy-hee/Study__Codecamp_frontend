import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "../../../src/commons/library/firebase";

export default function FirebasePage() {
  // collection: 서류봉투들
  const onClickSubmit = (): void => {
    // board 라는 서류봉투를 가져온다
    const board = collection(getFirestore(firebaseApp), "board");

    // 문서(board)에 데이터 추가 => firebase 에 가서 데이터를 등록함 
    // 기다릴 거면 await, 아니면 void
    void addDoc(board, {
      writer: "영희",
      title: "제목",
      contents: "안녕하세요 ",
    });
  };

  const onClickFetch = async (): Promise<void> => {
    // board 라는 서류봉투를 가져온다
    const board = collection(getFirestore(firebaseApp), "board");
    // result 안에는 board 서류봉투 안에 있는 A4용지들이 들어있다.
    const result = await getDocs(board);
    // 각각을 map으로 순화하면서 datas에 담음
    const datas = result.docs.map(el => el.data());

    console.log(datas); // 배열 안에 객체로 데이터들이 들어가있음
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
