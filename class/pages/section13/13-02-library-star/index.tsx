import React, { useState } from "react";
import { Rate } from "antd";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  // === 1단계 방식 ===
  // const onChangeStar = (value: number): void => {
  //   setValue(value); // 여기의 value는 scope 안에 있는 value 를 가리킴
  //   // 하지만 이 scope 안에는 value가 없기때문에 상위 scope에서 이것을 찾는다. (이를 스코프체인 이라고 함)
  //   // 그러면 위 스코프에 있는 const [value, setValue] = useState(3); 부분의 value를 사용하게 됨
  // };

  // === 2단계 방식 ===
  // const onChangeStar = (value) => setValue(value);

  return (
    // 1단계 방식 * 여기서의 onChange는 html의 속성이 아니라 라이브러리 제작자가 만든 것
    // 여기서의 value는 {} scope 안에 있는 value를 가리킴.
    // 근데 값이 없기때문에 상위 scope에서 찾게되고, 이는 결국 const [value, setValue] = useState(3); 부분의 value를 사용하게 됨
    // = 그 값이 여기의 value에 들어간다.
    // <Rate onChange={onChangeStar} value={value} />

    // 2단계 방식 (간소화 1)
    // <Rate onChange={onChangeStar} value={value} />

    // 3단계 방식(직접 넣기) (간소화 2)
    // <Rate onChange={(value) => setValue(value)} value={value} />

    // 4단계 방식 (간소화 3)
    // 어떤 함수가 바인딩이 되어 있을 때, 들어오는 인자의 값이
    // 그대로 그 다음 함수의 인자로 그대로 전달이 될 때에는 이 두개를 생략할 수 있다.
    // (여기서는 value들이 생략되어서 결국 setValue만 남게 됨)
    // 그래서 여기서 5를 클릭하면 value가 5로 바뀌게 된다.
    <Rate onChange={setValue} value={value} />
  );
}
