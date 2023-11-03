import { Rate } from "antd";
import { useState } from "react";

const desc = ["1점", "2점", "3점", "4점", "5점"];

export default function LibraryPage() {
  const [value, setValue] = useState(3);

  const onChangeStar = (value: number): void => {
    setValue(value);
    alert(`${value}점`);
  };

  return (
    <>
      <span>
        <Rate onChange={onChangeStar} value={value} />
        <br />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      </span>
    </>
  );
}
