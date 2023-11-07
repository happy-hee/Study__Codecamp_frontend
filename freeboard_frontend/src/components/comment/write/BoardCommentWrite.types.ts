/**
 * interface 모음
 */
import { ChangeEvent } from "react";

export interface IBoardCommentNewUIProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating:  (value: number) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  rating: number;
}
