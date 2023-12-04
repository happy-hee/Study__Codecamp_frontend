/**
 * class 컴포넌트 -> 함수형 컴포넌트로 변경
 */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  /**
   * useEffect
   * class의 componentDidMount, componentDidMount, componentWillUnmount 를 useEffect 하나로 가능하다.
   */

  // 형태 : useEffect(함수, 배열) - class componentDidMount 와 동일
  useEffect(() => {
    console.log("그려지고나서 실행");
  }, []);

  // 형태 : useEffect(함수) - class componentDidMount + componentDidUpdate 와 동일
  useEffect(() => {
    console.log("변경되고나서 실행(리렌더링)"); // 그리고나서 실행 + 변경되고나서 실행(리렌더링) 두 개가 같이 뜸
  });

  // 형태 : useEffect(return이 담긴 함수) - clss componentWillUnmount 와 동일
  useEffect(() => {
    return () => {
      console.log("사라지기 전에 실행");
    };
  });

  // , [ ] 괄호의 용도
  useEffect(() => {
    console.log("count가 바뀌면 다시 실행");
    // 일단 처음에 한 번 함수가 실행되고,
    // 배열에 들어가있는 값이 바뀔 때 위에 있는 함수를 다시 실행된다.
    // 의존성 배열 (dependency Array)
  }, []); // count가 바뀔 때마다 console 이 찍힘

  /**
   * 1. useEffect 하나로 합치기
   */
  useEffect(() => {
    // 그려지고나서 실행
    console.log("그려지고나서 실행");

    // 사라지기 전 실행
    return () => {
      console.log("사라지기 전에 실행");
    };

    // 배열 안에 들어있는게 바뀌면 재실행
  }, []);

  /**
   * 2. useEffect 잘못된 사용법!! (1. 추가 렌더링)
   */
  useEffect(() => {
    // 1. setWriter 가 실행 될 때마다 또 추가 렌더링이 되므로 가급적이면 피하는게 좋다.
    // setWriter();
    // 2. state가 바뀌면서 리렌더링이 되므로 무한루프가 됨
    // setCount((prev) => prev + 1);
  }, [count]);

  const onClickCountUp = (): void => {
    setCount((prev) => prev + 1);
  };

  // 페이지 이동
  const onClickMove = (): void => {
    void router.push("/");
  };

  /**
   * [STUDY MEMO]
   * 아래의 콘솔이 제일 마지막에 실행 될 것 같지만,
   * useEffect는 그려지고나서 실행이 되고, onClick은 내가 클릭을 해야만 실행이 된다.
   * 그러므로 '언제 실행 될까?' console.log가 먼저 찍히고,
   * 위의 useEffect로 인한 console.log들이 찍히게 된다.
   */
  console.log("언제 실행 될까?");

  return (
    // 화면에 보여질 부분
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>숫자 변경하기</button>
      <button onClick={onClickMove}>[사이트 나가기]</button>
    </>
  );
}
