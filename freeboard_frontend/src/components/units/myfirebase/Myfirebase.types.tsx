import { ChangeEvent } from "react";
export interface IMyfirebaseUIProps {
  dataBoards: any;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => Promise<void>;
  onClickFetch: () => Promise<void>;
}
