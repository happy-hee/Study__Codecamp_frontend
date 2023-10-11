/**
 * 상품 상세 페이지
 */
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "../../../../src/components/units/product/new/ProductNew.queries";

export default function productDetailPage() {
  const router = useRouter();

  // API 요청 후 받아온 데이터를 data에 넣어준다.
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });

  const onClickMove = () => {
    router.push(`/08/product/${router.query.id}/edit`);
  };

  return (
    <div>
      <div>
        <div>판매자 : {data && data.fetchProduct?.seller}</div>
        <div>상품명 : {data && data.fetchProduct?.name}</div>
        <div>상품정보 : {data && data.fetchProduct?.detail}</div>
        <div>가격 : {data && data.fetchProduct?.price}</div>
        <button onClick={onClickMove}>수정하기</button>
      </div>
    </div>
  );
}
