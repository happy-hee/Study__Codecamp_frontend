import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  function onClickCountUp() {
    // setState는 여러개가 있을 때 가장 마지막에 있는 것만 실행
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1); // 이것만 적용이 된다.
    // => 카운트 올리기 버튼을 클릭했을 때 '1'씩 증가

    // prevState 를 사용하자!
    // prev는 임시 저장 공간에 값을 담아두고 바로 변경을 하지 않고 다음으로 넘어간다.
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // => 카운트 올리기 버튼을 클릭했을 때 4씩 증가
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </>
  );
}
