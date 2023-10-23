/**
 * interface 모음
 */
import { MouseEvent } from "react";
export interface IBoardDetailUIProps {
  data?: any;
  isEdit?: boolean;
  onClickMoveEdit: (e: MouseEvent<HTMLButtonElement>) => void;
}
