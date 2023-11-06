import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import { useState } from "react";

export default function DatePickerPage() {
  const [value, setValue] = useState("");

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);

    // 1. 날짜를 클릭하면 날짜선택버튼 아래쪽에 날짜를 나타내 보세요.
    // setValue(dateString);

    // 2. 위에서 나타낸 날짜에서 월만 나타내 보세요.
    setValue(dateString.split("-")[1]);
  };
  return (
    <>
      <Space direction="vertical">
        <DatePicker onChange={onChangeDate} />
      </Space>
      {value && <div>{value}</div>}
    </>
  );
}
