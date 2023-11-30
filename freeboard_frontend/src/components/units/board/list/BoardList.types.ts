/**
 * interface 모음
 */
import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import type { IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";
export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  count?: number;
  // refetch?: any;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  onClickMoteToBoardDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoteToBoardNew: () => void;
}
