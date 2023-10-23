import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);

  const router = useRouter();

  const onClickMoteToBoardDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${e.currentTarget.id}`);
  };

  const onClickMoteToBoardNew = () => {
    router.push(`/boards/new`);
  };

  // 날짜 형식 변환 방법 모르겠음!
  return <BoardListUI data={data} onClickMoteToBoardDetail={onClickMoteToBoardDetail} onClickMoteToBoardNew={onClickMoteToBoardNew} />;
}
