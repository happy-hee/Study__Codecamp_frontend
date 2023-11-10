import Example from "../../src/components/units/14-props-children-example";

export default function PropsChildrenPage() {
  return (
    <div>
      <div>++++++++++++++ 파란색 청록색 ++++++++++++++</div>
      {/* 수동으로 입력하는 프롭스 */}
      <Example school="다람쥐 초등학교">
        {/* 이 부분은 이름이 자동으로 붙는다. (children) */}
        {/* Example쏙 들어가고 그 Example을 땡겨온다. */}
        <div>
          <input type="text" />
          <div>저는 철수입니다.</div>
          <button>클릭해주세요!</button>
        </div>
      </Example>
      <div>++++++++++++++ 파란색 청록색 ++++++++++++++</div>
    </div>
  );
}
