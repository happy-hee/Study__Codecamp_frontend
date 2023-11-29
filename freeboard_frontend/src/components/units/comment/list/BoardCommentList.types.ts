/**
 * interface 모음
 */
import { IBoardComment, IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}

export interface IBoardCommentProps {
  el: IBoardComment;
}
