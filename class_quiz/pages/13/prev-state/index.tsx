import { useState } from "react";

export default function PrevstatePage() {
  const [state, setState] = useState(0);

  //  1. 실행 버튼을 눌렀을 때, state의 결과를 예측해 보세요. => 4, 8, 12, 16
  function sumAll() {
    // setState(state + 1);
    // setState(state + 2);
    // setState(state + 3);
    // setState(state + 4); // 이것만 실행

    // 2. 사실, 우리는 state의 결과가 `1 + 2 + 3 + 4` 가 되길 원합니다.
    // setState의 내부를 어떻게 변경하면 좋을까요?
    setState((prev) => prev + 1); // +1
    setState((prev) => prev + 2); // +2
    setState((prev) => prev + 3); // +3
    setState((prev) => prev + 4); // +4
  }

  return (
    <>
      <div>결과는: {state}</div>
      <button onClick={sumAll}>실행!</button>
    </>
  );
}
