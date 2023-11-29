/**
 * 댓글 리스트 Presenter
 */
import BoardComment from "./BoardCommentList.presenterItem";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <S.Wrapper>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true} useWindow={false}>
        {props.data?.fetchBoardComments.map((el) => (
          <BoardComment key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </S.Wrapper>
  );
}
