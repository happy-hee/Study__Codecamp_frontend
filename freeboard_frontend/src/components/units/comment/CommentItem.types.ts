import { MouseEvent } from "react";

export interface ICommentItemProps {
  el: any;
  onClickDeleteModal: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface ICommentItemUIProps {
  el: any;
  onClickEdit: () => void;
  onClickDeleteModal: (e: MouseEvent<HTMLButtonElement>) => void;
}
