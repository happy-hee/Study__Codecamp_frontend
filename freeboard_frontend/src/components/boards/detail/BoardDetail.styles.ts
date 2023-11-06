import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProfileIcon = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
  min-height: 600px;
`;

export const Youtube = styled.div`
  width: 100%;
  text-align: center;
  padding: 120px 0;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: gold;
  }
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Like = styled.div`
  font-size: 24px;
  padding: 0 10px;
  margin: 0 10px;
  text-align: center;
  color: #ffd600;
  cursor: pointer;
`;
export const Dislike = styled.div`
  font-size: 24px;
  padding: 0 10px;
  margin: 0 10px;
  text-align: center;
  color: #828282;
  cursor: pointer;
`;
export const LikeCount = styled.div`
  font-size: 18px;
`;
export const DislikeCount = styled.div`
  font-size: 18px;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 20px;
`;

export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 20px;
`;
