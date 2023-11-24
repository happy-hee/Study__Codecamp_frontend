import * as S from "./Pagination.styles";
import { IPaginationUIProps } from "./Pagination.types";

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <>
      {/* [문제 2] 위에서 요청한 게시글 목록 데이터를 화면에 간단한 표 형태로 출력해 주세요.
          ⇒ 힌트) map을 활용해 보세요. */}
      <p>페이지네이션 구현하기</p>
      {props.data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}

      <S.PrevButton onClick={props.onClickPrevPage}>{`<`}</S.PrevButton>

      {/* [문제 3] 표 하단에 page를 10개 나열해 보세요.
          ⇒ 힌트) 10개의 임의 배열을 만든 후, map을 활용해 보세요. */}
      {new Array(10).fill(1).map(
        (_, index) =>
          // [문제 7] 페이지 10개 중, 마지막 페이지가 77 페이지라면, 나머지 78 79 80 페이지는 화면에 보이지 않도록 만들어 주세요.
          // 현재 페이지가 마지막 페이지보다 같거나 작을때까지만 반복
          index + props.startPage <= props.lastPage && (
            <S.Paging
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
              style={{ margin: "0 10px" }}
              // [문제 5] 현재 클릭된 page의 버튼 색을 변경해 보세요. => 모르겠음
              className={index + props.startPage === props.recentPage ? "active" : ""}
            >
              {index + props.startPage}
            </S.Paging>
          ),
      )}

      <S.NextButton onClick={props.onClickNextPage}>{`>`}</S.NextButton>
      <S.LastButton onClick={props.onClickLastPage}>{`>>`}</S.LastButton>
    </>
  );
}
