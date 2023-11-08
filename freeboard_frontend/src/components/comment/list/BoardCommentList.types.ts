/**
 * interface 모음
 */
import { MouseEvent, ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  isOpenDeleteModal: boolean;
  onClickDeleteModal: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteModalToggle: () => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
}
