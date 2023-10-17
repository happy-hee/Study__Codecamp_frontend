export default function TypescriptPage() {
    // 타입 추론(명시를 하지 않아도 이게 ~ 타입이겠구나 추론)
    let aaa = "안녕하세요";
    aaa = 3; // error
  
    // 타입 명시
    let bbb: string = "반갑습니다";
    bbb = 10; // error
  
    // 타입 명시가 필요한 상황
    // nunber도 되고 string도 되는 타입이라고 명시를 해야함.
    let ccc: number | string = 1000;
    ccc = "1000원";
  
    // 숫자타입
    let ddd: number = 10;
    ddd = "철수"; // error
  
    // boolean타입
    let eee: boolean = true;
    eee = false;
    eee = "false"; // error, 또한 비어있지 않은 문자열은 true 이므로 false 라고 되어있어도 true가 되니 주의가 필요
  
    // 배열타입
    let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"]; // 숫자들만 들어갈 수 있는 배열. "안녕하세요" 부분이 error
    let ggg: string[] = ["반", "갑", "습", "니", "다", 10]; //문자열만 들어갈 수 있는 배열. 10 부분이 error
    let hhh = ["반", "갑", "습", "니", "다", 10]; // 타입을 추론해서 어떤 타입을 사용하는지 알아보기 (변수명에 마우스를 가져다대면 추론된 타입이 나옴.)
  
    // 객체타입
    interface IProfile {
      name: string;
      age: number | string;
      school: string;
      hobby?: string; // key 옆에 ? 를 작성하면 있어도 되고 없어도 된다를 의미. 만약 여기에 ?를 붙이지 않으면 아래 profile에서 에러가 남
    }
  
    const profile: IProfile = {
      name: "영희",
      age: 13,
      school: "다람쥐 초등학교",
    };
  
    profile.name = "미영"; // 타입추론으로 같은 string 타입
    profile.age = "13살"; // (IProfile이 없었다면 타입이 다르므로 error)
    profile.hobby = "독서"; // (IProfile이 없었다면 profile에는 hobby가 없으므로 error)
  
    // 함수타입 (가장 우측에 있는 :string 은 리턴의 타입)
    function add(num1: number, num2: number, unit: string): string {
      return num1 + num2 + unit;
    }
    const result = add(1000, 2000, "원"); // 결과의 return 타입도 예측 가능
  
    const add2 = (num1: number, num2: number, unit: string): string => {
      return num1 + num2 + unit;
    };
    const result2 = add2(1000, 2000, "원"); // 결과의 return 타입도 예측 가능
  
    // any타입 (일반 javascript와 동일하게 아무 타입이나 올 수 있음)
    let qqq: any = "철수";
    qqq = 123;
  
    return <></>;
  }
  