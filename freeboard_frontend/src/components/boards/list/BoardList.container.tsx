import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../commons/types/generated/types";

export default function BoardList() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const router = useRouter();

  const onClickMoteToBoardDetail = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${e.currentTarget.id}`);
  };

  const onClickMoteToBoardNew = () => {
    router.push(`/boards/new`);
  };

  return <BoardListUI data={data} onClickMoteToBoardDetail={onClickMoteToBoardDetail} onClickMoteToBoardNew={onClickMoteToBoardNew} />;
}
