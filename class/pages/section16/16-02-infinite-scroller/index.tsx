import { useQuery, gql } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller"; // 무한 스크롤 플러그인

// 조회
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onLoadMore = (): void => {
    if (data === undefined) return;

    // fetchMore: 기존걸 놔두고 추가로 fetch
    void fetchMore({
      // page:
      // fetchBoards가 아래쪽에 return 을 통해 이전 data + 받아온 data를 합치면서10개씩 늘어나는데,
      // 처음엔 10개/10개 + 1이므로 2페이지, 다음엔 20개/10개 + 1이므로 3페이지...
      // 이런식으로 점점 페이지 수가 1씩 늘어남
      // 그러면 그 페이지를 추가로 fetch 하고, 그걸 fetchMoreResult에 넣어주면서 update
      variables: { page: Math.ceil(data?.fetchBoards.length ?? 10) / 10 + 1 },
      // prev : 이전 data, fetchMoreResult: 새로 받아올 data
      updateQuery: (prev, { fetchMoreResult }) => {
        // 새로 받아올 data가 없을 경우 이전 data를 보여줌
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          // 이전 data와 새로 받아온 data를 하나로 합친 배열을 fetchBoards에 넣어줌
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <>
      {/* 화면 전체가 아닌 어느 부분에서 무한스크롤 되게 하고 싶은 경우, 사이즈를 지정한 뒤 overflow auto를 주면 된다. */}
      <div style={{ width: "700px", height: "300px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          // 스크롤을 내렸을 때 그 스크롤을 감지해서 실행시킬 함수
          loadMore={onLoadMore}
          // 스크롤을 내렸을 때 작동 여부 (true || false)
          hasMore={true}
          useWindow={false}
        >
          {/* 로드 됐을 때 실행되길 원하는 부분 */}
          {data?.fetchBoards.map((el) => (
            <div key={el._id}>
              <span>
                <input type="checkbox" />
              </span>
              <span style={{ margin: "10px;" }}>{el._id}</span>
              <span style={{ margin: "10px;" }}>{el.title}</span>
              <span style={{ margin: "10px;" }}>{el.writer}</span>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
