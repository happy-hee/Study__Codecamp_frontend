// 상품 등록/수정 컴포넌트
export default function ProductComponent(props) {
    return (
      <div>
        <h1>상품 {props.isEdit ? "수정" : "등록"} 페이지</h1>
        <div>
          <div>판매자 :{props.isEdit ? props.data?.fetchProduct.seller : <input type="text" onChange={props.onChangeSeller} />}</div>
          <div>
            상품명 : <input type="text" onChange={props.onChangeName} defaultValue={props.data?.fetchProduct.name} />
          </div>
          <div>
            상품정보 : <input type="text" onChange={props.onChangeDetail} defaultValue={props.data?.fetchProduct.detail} />
          </div>
          <div>
            가격 : <input type="text" onChange={props.onChangePrice} defaultValue={props.data?.fetchProduct.price} />
          </div>
          <button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>{props.isEdit ? "수정" : "등록"}하기</button>
        </div>
      </div>
    );
  }
  