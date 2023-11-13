import styled from "@emotion/styled";
import { Rate, Modal } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const List = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
`;

export const Center = styled.div`
  padding-left: 60px;
  width: 100%;
`;

export const ProfileIcon = styled.img`
  width: 48px;
  position: absolute;
  top: 20px;
  left: 0;
`;
export const InfoWrapper = styled.div`
  margin-bottom: 6px;
  padding-right: 70px;
`;
export const ContentsWrapper = styled.div``;
export const Writer = styled.span`
  color: #000;
  font-family: "NotoSans";
  font-weight: 500;
  margin-right: 16px;
`;
export const Contents = styled.div`
  margin-bottom: 20px;
  color: #4f4f4f;
`;
export const CreatedAt = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;
export const ControlButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  display: flex;
`;
export const EditButton = styled.button`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 0;
`;
export const EditButtonIcon = styled.img`
  width: 100%;
`;
export const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;
export const DeleteButtonIcon = styled.img`
  width: 100%;
`;

export const PasswordInput = styled.input``;

export const CommentRate = styled(Rate)``;

export const PasswordModal = styled(Modal)``;
