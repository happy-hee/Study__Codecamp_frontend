/**
 * Pagination01 Styles
 */
import styled from "@emotion/styled";
import { IPagination01ButtonProps } from "./Pagination01.types";

export const PageButton = styled.span`
  padding: 0 10px;
  cursor: pointer;
  color: ${(props: IPagination01ButtonProps) => (props.isActive ? "red" : "#333")};
  font-weight: ${(props: IPagination01ButtonProps) => (props.isActive ? "bold" : "normal")};
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PrevButton = styled.button`
  cursor: pointer;
`;

export const NextButton = styled.button`
  margin-right: 20px;
  cursor: pointer;
`;

export const LastButton = styled.button`
  cursor: pointer;
`;

export const PageButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
