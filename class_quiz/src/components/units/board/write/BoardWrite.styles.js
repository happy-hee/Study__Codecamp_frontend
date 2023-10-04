// Emotion 스타일
import styled from "@emotion/styled";

export const GrayInput = styled.input`
  border-color: #ddd;
`;

export const SubmitBtn = styled.button`
  background-color: ${(props) => (props.isActive ? "orange" : "")};
`;
