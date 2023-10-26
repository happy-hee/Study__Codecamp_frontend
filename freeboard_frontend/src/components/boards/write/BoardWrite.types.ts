/**
 * interface 모음
 */
import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
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
  data?: Pick<IQuery, "fetchBoard">;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  errorWriter: string;
  errorPassword: string;
  errorTitle: string;
  errorContents: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
