import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  // 게시글 갯수
  const { data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(
    FETCH_BOARDS_COUNT
  );

  const onClickMoteToBoardDetail = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  // 게시글 작성
  const onClickMoteToBoardNew = (): void => {
    void router.push(`/boards/new`);
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      onClickMoteToBoardDetail={onClickMoteToBoardDetail}
      onClickMoteToBoardNew={onClickMoteToBoardNew}
      count={dataBoardsCount?.fetchBoardsCount}
    />
  );
}
