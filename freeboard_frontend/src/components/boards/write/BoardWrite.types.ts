/**
 * interface 모음
 */
import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";
import { Address } from "react-daum-postcode";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  isEdit: boolean;
  isActive: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => Promise<void>;
  onClickUpdate: () => Promise<void>;
  isOpen: boolean;
  onClickAddressModal: () => void;
  onCompleteAddressSearch: (data: Address) => void;
  address: string;
  zipcode: string;
  errorWriter: string;
  errorPassword: string;
  errorTitle: string;
  errorContents: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
