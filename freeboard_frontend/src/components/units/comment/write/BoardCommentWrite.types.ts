/**
 * interface 모음
 */
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentNewProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}
export interface IBoardCommentNewUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (value: number) => void;
  onClickSubmit: () => Promise<void>;
  onClickUpdate: () => void;
  writer: string;
  password: string;
  contents: string;
  rating: number;
  isEdit?: boolean;
  el?: IBoardComment;
}

export interface IBoardCommentButtonProps {
  isEdit?: boolean;
}
