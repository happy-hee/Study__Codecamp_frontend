import axios from "axios";
import { useEffect, useState } from "react";
export default function RestGetPage() {
  const [dog, setDog] = useState("");

  /**
   * [STUDY MEMO]
   * REST API 에서 화면이 열리면 바로 API 요청을 하고 싶을 경우 useEffect를 사용
   * useQuery와 비교했을 때, useQuery는 선언한 부분에서 요청이 들어가는 반면,
   * useEffect를 사용하면 화면이 다 그려진 후에 useEffect가 실행되게 된다.
   * => useEffect가 더 오래 걸린다.
   *
   * 그러면 useQuery처럼 사용하고 싶다면?
   * ReactQuery라는 라이브러리를 사용 (useQuery같은 기능)
   *
   * ReactQuery (보통 restAPI / graphql도 가능하긴 함)'
   * ApolloClient (보통 graphql)
   */

  /**
   * [STUDY MEMO]
   * useEffect 안에서 async/await 을 사용하고 싶을 때,
   * useEffect (async() => { await }) 이런식으로 앞쪽에 async를 붙이는 건 불가능
   * 그럼 어떻게 하나?
   * => useEffect 안에 함수를 하나 만들어서 거기에 async를 달고
   * 가장 아랫줄에서 해당 함수를 실행하도록 만들면 된다.
   */
  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result.data.message); // message: 사진 주소

      setDog(result.data.message);
    };
    void onClickSync();
  });

  return (
    <>
      <img src={dog} alt="" />
    </>
  );
}
