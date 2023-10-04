// 프레젠터 컴포넌트
import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      <div> @@@@@@@@@@@@ 여기는 프레젠터 입니다. @@@@@@@@@@@@ </div>
      <h1>상품 등록 페이지</h1>
      <div>
        판매자: <S.GrayInput type="text" onChange={props.onChangeSeller} />
      </div>
      <div>
        상품명: <S.GrayInput type="text" onChange={props.onChangeName} />
      </div>
      <div>
        상품내용: <S.GrayInput type="text" onChange={props.onChangeDetail} />
      </div>
      <div>
        상품가격: <S.GrayInput type="text" onChange={props.onChangePrice} />
      </div>
      <S.SubmitBtn onClick={props.onClickSubmit} isActive={props.isActive}>
        상품 등록
      </S.SubmitBtn>
      <div> @@@@@@@@@@@@ 여기는 프레젠터 입니다. @@@@@@@@@@@@ </div>
    </div>
  );
}
