export interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }
  
  // 1. Partial 타입 (모든게 선택)
  type aaa = Partial<IProfile>;
  
  // 2. Required 타입 (모든게 필수)
  type bbb = Required<IProfile>;
  
  // 3. Pick 타입 (원하는 것만 가져오기)
  type ccc = Pick<IProfile, "name" | "age">;
  
  // 4. Omit 타입 (원하는 것만 빼기)
  type ddd = Omit<IProfile, "school">;
  
  // 5. Record 타입
  type eee = "철수" | "영희" | "훈이";
  let child: eee = "철수"; // 철수, 영희, 훈이 중 하나만 넣을 수 있다.
  type fff = Record<eee, IProfile>; // Record<key, value>
  
  // 6. keyof (객체의 key들로 Union 타입 만들기)
  // Union 타입 : "a" || "b" || "c" 이렇게 생김
  type ggg = keyof IProfile; // "name" | "age" | "shcool" | "hobby" (IProfile 객체의 키값으로 만들어진 Uniton 타입)
  let myProfile: ggg = "hobby"; // Error => name, age, shcool, hobby 중 하나만 넣을 수 있다.
  
  // 7. type vs interface 차이 => 선언병합. iterface는 가능, type은 불가능
  export interface IProfile {
    candy: number; // 선언병합으로 IProfile에 추가됨
  }
  
  // 8. 배운 것 응용하기
  // candy만 사용하고 싶을 경우.
  // 나머지는 다 선택적으로 할 수 있는 Partial 사용 (자주 사용됨)
  let profile: Partial<IProfile> = {
    candy: 10,
  };
  