// ## 3. axios로 rest기반 open-api 사용하기

// 1. 아래의 open-api 주소에 접속하여 제공하는 api를 사용하여 화면에 그림을 그려보세요.
// ⇒ 힌트) useEffect에서 axios와 setState를 사용해야 합니다.

import axios from "axios";
import { useEffect, useState } from "react";

export default function RestOpenApiPage() {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const 바로API요청 = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result.data.message);

      setDog(result.data.message);
    };
    void 바로API요청();
  });

  return (
    <>
      <img src={dog} alt="" />
    </>
  );
}
