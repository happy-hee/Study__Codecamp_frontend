/**
 * Pagination01 Types
 */
import { ApolloQueryResult } from "@apollo/client";

import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export interface IPagination01Props {
  count?: number;
  refetch: (variables: Partial<IQueryFetchBoardsArgs>) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

export interface IPagination01UIProps {
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickLastPage: () => void;
  onClickPage: (e: MouseEvent<HTMLSpanElement>) => void;
  startPage: number;
  lastPage: number;
  activePage: number;
}

export interface IPagination01ButtonProps {
  isActive?: boolean;
}
