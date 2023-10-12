import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
  border-top: 1px solid #bdbdbd;
`;
export const Title = styled.div`
  padding-left: 38px;
  margin-bottom: 40px;
  background: url("/images/board/detail/rate_review-24px.png") no-repeat left 0 top 3px;
  font-weight: 500;
  font-size: 18px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Writer = styled.input`
  width: 180px;
  padding: 14px 20px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
  height: 52px;
  line-height: 52px;
`;

export const Password = styled.input`
  width: 180px;
  padding: 14px 20px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
  height: 52px;
  line-height: 52px;
`;

export const ContentsWrapper = styled.div`
  margin-bottom: 40px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px;
  resize: none;
  border: 0;
`;

export const ContentsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -4px;
  border-top: 1px solid #f2f2f2;
`;

export const TextCount = styled.div`
  padding-left: 20px;
  font-size: 16px;
  color: #bdbdbd;
`;

export const CommentButton = styled.button`
  height: 52px;
  padding: 14px 16px;
  background-color: #000;
  color: #fff;
  border: 0;
`;
