import { MouseEvent } from "react";
import { IQuery } from "../../src/commons/types/generated/types";

/**
 * interface 모음
 */
export interface IPaginationProps {
  data?: Pick<IQuery, "fetchBoards">;
}
export interface IPaginationUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickPage: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickPrevPage: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickNextPage: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickLastPage: (e: MouseEvent<HTMLButtonElement>) => void;
  recentPage: number;
  startPage: number;
  lastPage: number;
}
