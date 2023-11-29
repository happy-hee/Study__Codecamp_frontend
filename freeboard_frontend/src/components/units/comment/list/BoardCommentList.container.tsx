/**
 * 댓글 리스트 Container
 */
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { IQuery, IQueryFetchBoardCommentsArgs } from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./BoardCommentList.presenter";

export default function BoardCommentLlist() {
  const router = useRouter();
  const boardId = typeof router.query.boardId === "string" ? router.query.boardId : "";

  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    {
      variables: {
        boardId,
      },
      skip: boardId === "",
    }
  );

  const onLoadMore = (): void => {
    if (data === undefined) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length ?? 10) / 10 + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }

        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments],
        };
      },
    });
  };
  return (
    <>
      <BoardCommentListUI data={data} onLoadMore={onLoadMore} />
    </>
  );
}
