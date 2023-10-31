export default function Checkbox() {
  const qqq2 = () => {
    alert("클릭2");
  };
  const qqq3 = (event: any) => {
    // stopPropagation: 상위 태그의 onClick 이벤트가 실행되지 않도록 하는 함수
    event.stopPropagation();
    alert("클릭3");
  };

  return (
    <>
      <span onClick={qqq2}>
        <input onClick={qqq3} type="checkbox" />
      </span>
    </>
  );
}
