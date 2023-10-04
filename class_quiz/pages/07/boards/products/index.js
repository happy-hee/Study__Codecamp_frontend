import { useQuery, useMutation, gql } from "@apollo/client";
// import { useState } from "react";

// fetchProducts로 상품 정보 가져오기
const FETCH_PRODUCTS = gql`
    query {
        fetchProducts(page: 2) {
            _id
            name
            detail
            price
        }
    }
`;

// deleteProduct로 삭제할 상품 삭제
const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID) {
        deleteProduct(productId: $productId) {
            _id
            number
            message
        }
    }
`;

export default function ProductsQuiz() {
    const { data } = useQuery(FETCH_PRODUCTS);
    // deleteProduct : 함수, onClickDelete 에 있는 deleteProduct 함수가 실행된다.
    const [deleteProduct] = useMutation(DELETE_PRODUCT);

    let onClickDelete = (e) => {
        deleteProduct({
            variables: {
                productId: e.target.id,
            },
            refetchQueries: [{ query: FETCH_PRODUCTS }],
        });
    };

    return (
        <>
            {data?.fetchProducts.map((el) => (
                <div key={el._id}>
                    <span>
                        <input className="prodCheck" type="checkbox" />
                    </span>

                    <span style={{ margin: "10px" }}>상품이름: {el ? el?.name : "로딩중..."}</span>
                    <span style={{ margin: "10px" }}>상품상세: {el ? el?.detail : "로딩중..."}</span>
                    <span style={{ margin: "10px" }}>가격: {el ? el?.price : "로딩중..."}</span>

                    <span>
                        <button id={el._id} style={{ margin: "10px" }} onClick={onClickDelete}>
                            삭제
                        </button>
                    </span>
                </div>
            ))}
        </>
    );
}
