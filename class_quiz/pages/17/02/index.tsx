// ## 2. 클래스 컴포넌트를 함수형 컴포넌트로 변경하기

// 1. 아래의 클래스 컴포넌트를 함수형 컴포넌트로 변경해 보세요.
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionalComponent() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  const onClickButton = (): void => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  // componentDidMount
  useEffect(() => {
    console.log("마운트");
  }, []);

  // componentDidMount
  useEffect(() => {
    console.log("컴포넌트 변경");
  });

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("컴포넌트 제거");
    };
  });

  console.log("마운트 시작!");

  return (
    <>
      <div>카운트: {count}</div>
      <button onClick={onClickButton}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}

// export default class MyComponent extends Component {
//   state = {
//     count: 0,
//   };

//   componentDidMount() {
//     console.log("컴포넌트가 마운트됐습니다~");
//   }

//   componentDidUpdate() {
//     console.log("컴포넌트가 변경됐습니다~");
//   }

//   componentWillUnmount() {
//     alert("컴포넌트가 제거됩니다~");
//   }

//   onClickButton = () => {
//     this.setState((prev: { count: number }) => ({ count: prev.count + 1 }));
//   };

//   onClickMove = () => {
//     void Router.push("/");
//   };

//   render() {
//     console.log("마운트 시작");
//     return (
//       <>
//         <div>카운트: {this.state.count}</div>
//         <button onClick={this.onClickCounter}>카운트(+1)</button>
//         <button onClick={this.onClickMove}>이동하기</button>
//       </>
//     );
//   }
// }
