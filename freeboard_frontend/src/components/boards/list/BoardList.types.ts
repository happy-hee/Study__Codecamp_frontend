/**
 * interface 모음
 */
import { ChangeEvent, MouseEvent } from "react";
export interface IBoardListUIProps {
  data?: any;
  onClickMoteToBoardDetail: (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoteToBoardNew: (e: MouseEvent<HTMLButtonElement>) => void;
}