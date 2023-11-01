import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(UpCircleOutlined)`
  color: red;
  font-size: 50px;
`;

export default function LibraryIconPage() {
  const onClickDelete = (event: MouseEvent<HTMLDivElement>) => {
    console.log(event.currentTarget.id);
  };

  return (
    <div id="삭제할게시글ID" onClick={onClickDelete}>
      {/* 아이콘 자체에 id와 onClick 이벤트를 주면 이벤트버블링으로 인해 작동이 되지 않기때문에 div로 감싸준다. */}
      <MyIcon />;
    </div>
  );
}
