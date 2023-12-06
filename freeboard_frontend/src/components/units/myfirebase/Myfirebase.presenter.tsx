import { IMyfirebaseUIProps } from "./Myfirebase.types";

export default function MyfirebaseUI(props: IMyfirebaseUIProps) {
  return (
    <>
      <div>
        <h2>Create</h2>
        <div>
          <span>이름</span>
          <input onChange={props.onChangeWriter} type="text" />
        </div>
        <div>
          <span>제목</span>
          <input onChange={props.onChangeTitle} type="text" />
        </div>
        <div>
          <span>내용</span>
          <input onChange={props.onChangeContents} type="text" />
        </div>
        <button onClick={props.onClickSubmit}>등록하기</button>
      </div>

      <div>
        <h2>Read</h2>
        <button onClick={props.onClickFetch}>조회하기</button>
        <div>
          {props.dataBoards?.map((el: any, index: number) => (
            <div key={index}>
              <div>
                <span>No. : </span> {el.number}
              </div>
              <div>
                <span>작성자 : </span>
                {el.writer}
              </div>
              <div>
                <span>제목 : </span>
                {el.title}
              </div>
              <div>
                <span>내용 : </span>
                {el.contents}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
