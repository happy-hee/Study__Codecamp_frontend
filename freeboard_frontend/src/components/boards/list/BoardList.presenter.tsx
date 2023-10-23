import * as S from "./BoardList.styles";
import { getDate } from "../../../../src/commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.TableTop>
        <S.Row>
          <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        </S.Row>
      </S.TableTop>
      <S.TableBottom>
        {props.data?.fetchBoards.map((el: any) => (
          <S.Row key={el._id}>
            {/* ID */}
            <S.ColumnBasic>{String(el._id).slice(-4).toUpperCase()}</S.ColumnBasic>
            {/* 제목 */}
            <S.ColumnTitle id={el._id} onClick={props.onClickMoteToBoardDetail}>
              <a href="">{el.title}</a>
            </S.ColumnTitle>
            {/* 작성자 */}
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            {/* 날짜 */}
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
          </S.Row>
        ))}
      </S.TableBottom>
      <S.Footer>
        <S.Button onClick={props.onClickMoteToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
