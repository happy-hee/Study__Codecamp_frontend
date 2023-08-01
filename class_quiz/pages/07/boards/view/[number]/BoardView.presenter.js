export default function BoardViewUI(props) {
  return (
    <div>
      <div>
        판매자: {props.data ? props.data.fetchProduct?.seller : "loading..."}
      </div>
      <div>
        상품명: {props.data ? props.data.fetchProduct?.name : "loading..."}
      </div>
      <div>
        상품내용: {props.data ? props.data.fetchProduct?.detail : "loading..."}
      </div>
      <div>
        상품가격: {props.data ? props.data.fetchProduct?.price : "loading..."}
      </div>
    </div>
  );
}
