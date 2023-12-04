import axios from "axios";
import { useState, useEffect } from "react";
import OpenapiUI from "./openapi.presenter";

export default function OpenapiList() {
  const [bgColors, setBgColors] = useState<string[]>([]);

  useEffect(() => {
    const randomColor = async (): Promise<void> => {
      // 5개로 이루어진 배열 생성
      new Array(5).fill(1).forEach(async (_) => {
        // 5번 result를 요청
        const result = await axios.get("https://x-colors.yurace.pro/api/random");

        // api로 받아온 색상 중 hex 코드를 랜덤 컬러 배열에 넣음
        setBgColors((prev) => [...prev, result.data.hex]);
      });
    };

    void randomColor();
  }, []);

  return (
    <>
      {/* 배열로 만들어놓은 배경 색상들을 props로 넘김 */}
      <OpenapiUI bgColors={bgColors} />
    </>
  );
}
