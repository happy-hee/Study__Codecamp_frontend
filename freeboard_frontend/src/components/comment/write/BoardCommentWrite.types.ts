/**
 * interface 모음
 */
import { ChangeEvent } from "react";

export interface IBoardCommentNewProps {
  isEdit: boolean;
  setIsEdit: any;
  el: any;
}
export interface IBoardCommentNewUIProps {
  onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (value: number) => void;
  onClickSubmit: () => Promise<void>;
  onClickUpdate: () => void;
  writer: string;
  password: string;
  contents: string;
  rating: number;
  isEdit: boolean;
  el: any;
}

export interface IBoardCommentButtonProps {
  isEdit: boolean;
}
