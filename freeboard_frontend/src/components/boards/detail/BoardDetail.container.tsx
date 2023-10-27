import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { IQuery, IQueryFetchBoardArgs } from "../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  if (!router || typeof router.query.boardId !== "string") return <></>;

  // API 요청 후 받아온 데이터를 data 에 넣어준다.
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  // 수정하기 페이지로 이동
  const onClickMoveEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  return <BoardDetailUI data={data} onClickMoveEdit={onClickMoveEdit} />;
}
