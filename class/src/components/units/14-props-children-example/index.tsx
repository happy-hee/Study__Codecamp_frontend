interface IExampleProps {
  school: string;
  children: JSX.Element; // div 태그로 가져왔던 부분
}

export default function Example(props: IExampleProps): JSX.Element {
  return (
    <>
      <div>안녕하세요 영희입니다.</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>안녕하세요 맹이입니다.</div>
    </>
  );
}
