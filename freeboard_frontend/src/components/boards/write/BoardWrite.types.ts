/**
 * interface 모음
 */
import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  isActive?: boolean;
  data?: any;
}

export interface IMyVariables {
  updateBoardInput: {
    title?: string;
    contents?: string;
  };
  password: string;
  boardId: string;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  isActive: boolean;
  data?: any;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  errorWriter: string;
  errorPassword: string;
  errorTitle: string;
  errorContents: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
