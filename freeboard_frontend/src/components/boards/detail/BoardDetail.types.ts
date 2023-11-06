/**
 * interface 모음
 */
import { IQuery } from "../../../commons/types/generated/types";
export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  isEdit?: boolean;
  onClickMoveEdit: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
  likeCount: number;
  dislikeCount: number;
}
