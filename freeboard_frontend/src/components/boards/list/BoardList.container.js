import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);

  const router = useRouter();

  const onClickMoteToBoardDetail = (e) => {
    router.push(`/boards/${e.target.id}`);
  };

  const onClickMoteToBoardNew = () => {
    router.push(`/boards/new`);
  };

  // 날짜 형식 변환 방법 모르겠음!
  return <BoardListUI data={data} onClickMoteToBoardDetail={onClickMoteToBoardDetail} onClickMoteToBoardNew={onClickMoteToBoardNew} />;
}
