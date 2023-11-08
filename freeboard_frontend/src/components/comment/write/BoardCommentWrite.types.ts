/**
 * interface 모음
 */
import { ChangeEvent } from "react";

export interface IBoardCommentNewUIProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (value: number) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => Promise<void>;
  writer: string;
  password: string;
  contents: string;
  rating: number;
}
