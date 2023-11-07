import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { IQuery, IQueryFetchBoardArgs } from "../../../commons/types/generated/types";
import { useState } from "react";

export default function BoardDetail() {
  const router = useRouter();

  const boardId = typeof router.query.boardId === "string" ? router.query.boardId : "";

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId,
    },
    skip: boardId === "",
  });

  // 수정하기 페이지로 이동
  const onClickMoveEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickLike = async () => {
    setLikeCount(likeCount + 1);
  };

  const onClickDislike = async () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <BoardDetailUI data={data} onClickMoveEdit={onClickMoveEdit} onClickLike={onClickLike} onClickDislike={onClickDislike} likeCount={likeCount} dislikeCount={dislikeCount} />
  );
}
