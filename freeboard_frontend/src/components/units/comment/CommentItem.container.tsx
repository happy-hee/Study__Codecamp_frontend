import { useState } from "react";
import CommentItemUI from "./CommentItem.presenter";
import BoardCommentNew from "../../comment/write/BoardCommentWrite.container";
import { ICommentItemProps } from "./CommentItem.types";

export default function CommentItem(props: ICommentItemProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = (): void => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <CommentItemUI el={props.el} onClickEdit={onClickEdit} onClickDeleteModal={props.onClickDeleteModal} />
      ) : (
        <BoardCommentNew isEdit={isEdit} setIsEdit={setIsEdit} key={props.el._id} el={props.el} />
      )}
    </div>
  );
}
