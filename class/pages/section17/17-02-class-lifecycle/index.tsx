/**
 * 클래스 컴포넌트
 */
import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  /**
   * class의 lifecycle 을 조정하는  componentDidMount / componentDidUpdate / componentWillUnmount 는
   * class 에서 사용하는 것으로, 함수형 컴포넌트에선 다른 것을 사용된다.
   */

  /**
   * [STUDY MEMO]
   * hook (useState, useQuery, useRouter 등 use로 시작하는 것) 은
   * '함수형' 컴포넌트에서 사용하는 것으로, class에선 사용 할 수 없다.
   */
  state = {
    count: 0,
  };

  componentDidMount(): void {
    console.log("그리고나서 실행");
  }

  componentDidUpdate(): void {
    console.log("변경되고나서 실행(리렌더링)");
  }

  // 예시 ) 채팅방 나가기 API
  // => 채팅방이 사라지기 전에 백엔드에 요청을 하고 나가자
  /**
   * [STUDY MEMO]
   * 이 채팅방 안에 componentWillUnmount 가 있고,
   * 그것을 통해 백엔드에 나갔다는 Mutation을 보내주게 되면
   * 페이지를 이동해서 나가던, 나가기를 클릭해서 나가던 어디를 통해서 나가던
   * 이 채팅방이 사라지기 전에 Mutation 을 날리고 사라지게 되므로
   * 따로따로 Mutation 을 주지 않아도 된다.
   */
  componentWillUnmount(): void {
    // 여기선 onClickMove 함수를 클릭했을 때 Router,push 로 이동하면서 화면이 사라지기 전에 아래 코드가 실행된다.
    console.log("사라지기 전에 실행");
  }

  onClickCountUp = (): void => {
    this.setState({
      count: 1,
    });
  };

  onClickMove = (): void => {
    void Router.push("/");
  };

  render() {
    return (
      // 화면에 보여질 부분
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>숫자 변경하기</button>
        <button onClick={this.onClickMove}>[사이트 나가기]</button>
      </>
    );
  }
}
