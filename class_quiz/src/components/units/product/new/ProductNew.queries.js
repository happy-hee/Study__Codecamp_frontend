// ProductNew - Queries
import { gql } from "@apollo/client";

// 생성
export const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

// 수정
export const UPDATE_PRODUCT = gql`
  mutation updateProduct($productId: ID, $updateProductInput: UpdateProductInput!) {
    updateProduct(productId: $productId, updateProductInput: $updateProductInput) {
      _id
      number
      message
    }
  }
`;

// 조회
export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;
