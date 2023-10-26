/**
 * interface 모음
 */
import { ChangeEvent } from "react";

export interface ICommentNewUIProps {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
}
