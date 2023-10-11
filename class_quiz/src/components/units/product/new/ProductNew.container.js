// ProductNew - Container
import { useState } from "react";
import ProductNewUI from "./ProductNew.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductNew.queries";
import { useRouter } from "next/router";

export default function ProductNew(props) {
  const router = useRouter();
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const [newProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  // 상품 등록
  const onClickSubmit = async () => {
    const result = await newProduct({
      variables: {
        seller,
        createProductInput: {
          name,
          detail,
          price,
        },
      },
    });

    console.log(result);

    // 상세페이지로 이동
    router.push(`/08/product/${result.data?.createProduct._id}`);
  };

  // 상품 수정
  const onClickUpdate = async () => {
    // 객체 변수에 담기
    const myVariables = {
      productId: router.query.id,
      updateProductInput: {},
    };

    // 각 값이 있을 경우만 게시물 수정
    if (name) myVariables.updateProductInput.name = name;
    if (detail) myVariables.updateProductInput.detail = detail;
    if (price) myVariables.updateProductInput.price = price;

    const result = await updateProduct({
      variables: myVariables,
    });

    // 상세페이지로 이동
    router.push(`/08/product/${result.data?.updateProduct._id}`);
  };

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(Number(e.target.value));
  };

  return (
    <div>
      <div> $$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$$</div>
      <ProductNewUI
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        isEdit={props.isEdit}
        data={props.data} // 등록하기 페이지일 경우 undefined, 수정하기 페이지의 경우 data
      />
      <div> $$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$$</div>
    </div>
  );
}
