// ## 1. 컴포넌트 생명주기

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ComponentLifeCyclePage() {
  const router = useRouter();

  // 1. isChange 라는 state를 만들어 주세요. 초기값은 false로 합니다.
  const [isChange, setIsChange] = useState(false);

  // 3. [변경] 버튼을 누르면 isChange를 true로 변경해 주세요.
  const onClickChangeTrue = () => {
    setIsChange(true);
  };

  // 4. 이동 버튼을 누르면 '/' 페이지로 이동시켜 주세요.
  const onClickMovedPage = (): void => {
    void router.push("/");
  };

  // 5. 컴포넌트가 렌더링이 되고난 이후에 경고메시지로 "Rendered!"를 표시해 주세요.
  useEffect(() => {
    alert("Rendered!");
  }, []);

  // 6. 변경 버튼을 클릭하면 경고메시지로 "Changed!!"를 표시해 주세요.
  // ⇒ 단, useEffect의 의존성 배열을 활용해 주세요.
  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);

  // 7. 이동 버튼을 클릭하면 경고메시지로 "Bye!!" 를 표시해 주세요.
  // ⇒ 단, 경고메시지는 useEffect에서 작성되어야 합니다.
  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, [router]);

  return (
    <>
      {/* 2. [변경], [이동] 2개의 버튼을 만들어 주세요. */}
      <button onClick={onClickChangeTrue}>[변경]</button>
      <button onClick={onClickMovedPage}>[이동]</button>
    </>
  );
}
