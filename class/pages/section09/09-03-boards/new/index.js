/**
 * 09-boards 작성페이지
 */
import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";

export default function GraphqlMutationPage(props) {
  return (
    <div>
      <div> ############## 여기는 페이지 입니다. ############## </div>
      <BoardWrite isEdit={false} />
      <div> ############## 여기는 페이지 입니다. ############## </div>
    </div>
  );
}
