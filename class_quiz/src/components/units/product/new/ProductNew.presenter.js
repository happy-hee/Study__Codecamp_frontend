// ProductNew - Presenter
import ProductComponent from "../component/index";

export default function ProductNewUI(props) {
  return (
    <div>
      <ProductComponent
        onChangeSeller={props.onChangeSeller}
        onChangeName={props.onChangeName}
        onChangeDetail={props.onChangeDetail}
        onChangePrice={props.onChangePrice}
        onClickSubmit={props.onClickSubmit}
        onClickUpdate={props.onClickUpdate}
        isEdit={props.isEdit}
        data={props.data}
      />
    </div>
  );
}
