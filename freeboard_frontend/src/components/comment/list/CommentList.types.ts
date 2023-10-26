/**
 * interface 모음
 */
import { MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface ICommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (e: MouseEvent<HTMLButtonElement>) => void;
}
