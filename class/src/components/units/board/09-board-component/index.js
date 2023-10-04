export default function BoardComponent(props) {
  return (
    // 다른곳에 import를 하는 컴포넌트들의 경우는 Fragment가 아닌 벽(div)을 쳐주는게 좋다.
    <div>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      제목: <input type="text" />
      <br />
      내용: <input type="text" />
      <br />
      <button>{props.isEdit ? "수정" : "등록"}하기</button>
    </div>
  );
}
