/**
 * 상품 수정 페이지
 */
import { useQuery } from "@apollo/client";
import ProductNew from "../../../../../src/components/units/product/new/ProductNew.container";
import { FETCH_PRODUCT } from "../../../../../src/components/units/product/new/ProductNew.queries";
import { useRouter } from "next/router";

// 조회
export default function ProductEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });

  return (
    <div>
      <div> ############## 여기는 상품수정 페이지 입니다. ############## </div>
      <ProductNew isEdit={true} data={data} />
      <div> ############## 여기는 상품수정 페이지 입니다. ############## </div>
    </div>
  );
}
