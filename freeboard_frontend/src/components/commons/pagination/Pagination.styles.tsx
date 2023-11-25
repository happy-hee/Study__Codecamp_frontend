/**
 * Pagination Styles
 */
import styled from "@emotion/styled";
import { IPaginationButtonProps } from "./Pagination.types";

export const PageButton = styled.span`
  padding: 0 10px;
  cursor: hover;
  color: ${(props: IPaginationButtonProps) => (props.isActive ? "red" : "blue")};
`;

export const Pagination = styled.div`
  display: flex;
`;

export const LastButton = styled.button``;

export const NextButton = styled.button`
  margin-right: 20px;
`;

export const PageButtonWrapper = styled.div``;

export const PrevButton = styled.button``;
