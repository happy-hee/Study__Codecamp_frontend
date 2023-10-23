/**
 * interface 모음
 */
import { MouseEvent } from "react";
export interface ICommentListUIProps {
  data?: any;
  onClickDelete: (e: MouseEvent<HTMLButtonElement>) => void;
}
