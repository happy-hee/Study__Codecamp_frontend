import { Component } from "react";

/**
 * [STUDY MEMO]
 * ClassCounterPage 라는 클래스를 extends Component를 통해
 * 컴포넌트에 있는 state, props 등등의 리액트 기능을 다 가지고 올 수 있다.
 */
export default class ClassCounterPage extends Component {
  /**
   * [STUDY MEMO]
   * class 에서는 state를 따로따로 만들지 않고 state 객체 안에 모든 state를 다 집어넣는다.
   */
  state = {
    count: 0,
  };

  /**
   * [STUDY MEMO]
   * class 안에서는 function 이나 const란 단어르 쓰지 않기로 했기때문에
   * 함수 이름만 넣는다.
   */
  // function onClickCountUp() {} => function 사용하지 않기때문에 에러
  // onClickCountUp() {
  //   console.log(this.state.count); // Error!! TypeError: Cannot read properties of undefined (reading 'state')
  //   // 에러 발생 이유 => this 의 속성을 이해해야 함!! this.html 파일에 작성
  // }

  // 위의 Error 를 해결하기 위해 화살표함수 사용
  onClickCountUp = (): void => {
    this.setState({
      count: 1,
    });
  };

  render() {
    // render 라는 함수: 약속
    return (
      // 화면에 보여질 부분
      <>
        {/* 여기서의 this: class 자기 자신 */}
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>숫자 변경하기</button>
      </>
    );
  }
}
