/**
 * interface 모음
 */
import { MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";
export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  count?: number;
  refetch?: any;
  onClickMoteToBoardDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoteToBoardNew: () => void;
}
