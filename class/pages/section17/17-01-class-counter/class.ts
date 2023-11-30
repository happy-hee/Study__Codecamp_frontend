// // class Date = {
// //   qqq = 3
// //   getFullYear() {}
// //   getMonth() {}
// // }

// // const date = new Date();
// // console.log(date.getFullYear());
// // console.log(date.getMonth() + 1);

// class Monster {
//   power = 50;

//   attack() {
//     console.log("공격");
//   }
// }

// // 상속
// // 확장 (익스텐즈) -> Monstaer 의 기능들을 상속
// class SuperMonster extends Monster {
//   /**
//    * [STUDY MEMO]
//    * Monter 를 상속받았기 때문에, 여기엔 안 보이지만 Monster에 있는
//    * power, attack 이 있다고 보면 된다.
//    */

//   run() {
//     console.log("도망");
//   }

//   /**
//    * [STUDY MEMO]
//    * attack은 함수이기 때문에 새로 값을 넣으면 기존 것을 삭제하고 덮어쓰기가 됨.
//    * => 이런걸 오버라이딩 이라고 함
//    */
//   attack() {
//     console.log("공격 덮어쓰기");
//   }
// }

// const monster = new Monster();
// monster.power; // 50
// monster.attack(); // 공격

// const myMonster = new SuperMonster();
// myMonster.attack(); // "공격 덮어쓰기" // SuperMonster에서 attack의 내용을 변경
// myMonster.run(); // "도망"
