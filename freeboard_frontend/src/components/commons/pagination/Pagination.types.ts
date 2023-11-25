/**
 * Pagination Types
 */
import { MouseEvent } from "react";

export interface IPaginationProps {
  data?: any;
  refetch?: any;
}

export interface IPaginationUIProps {
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickLast: () => void;
  onClickPage: (e: MouseEvent<HTMLSpanElement>) => void;
  startPage: number;
  recentPage: number;
}

export interface IPaginationButtonProps {
  isActive: boolean;
}
