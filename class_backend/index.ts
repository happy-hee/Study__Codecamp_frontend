/**
 * [학습] 18-Node.js
 */
/**
 * [STUDY MEMO]
 * Typescript를 사용하기 위해 해당 폴더에서 typescript를 설치
 * 1. package.json 사용하는 것을 권장 -> yarn init 을 하면 파일 생성됨
 * 2. typescript 설치
 * 3. 설정파일 생성 tsconfig.json
 * 4. 설정파일에 넣는 내용들 -> typescript 사이트에서 참고
 * 5. 이 상태에서 node index.ts 를 하면 **오류**가 난다. (SyntaxError: Missing initializer in const declaration)
 * 오류가 나는 이유: typescript는 javascript 실행 프로그램이기 때문!!!
 *
 * [해결방법]
 * 1) ts -> js 로 변환 후 node로 실행
 * 2) typescript 실행 파일 다운로드 (ts-node)
 *
 * 우리는 2)의 ts-node를 사용하는 방식
 * 설치 후 ts-node index.ts 명령어를 사용하면 오류가 발생함
 * (이유: node의 경우 전역으로 설치된 것이기 때문에 node 설명어를 사용할 수 있으나,)
 * => package.json늬 script 부분에 이름을 지어서 넣고 ts-node 로 실행할 명령어 작성 후 해당 이름으로 실행(yarn 이름) 한다.
 *
 * json 파일의
 * devDependencies : 개발시 필요(vscode용)
 * dependencies : 실행시 필요
 */

/**
 * [학습] 18-graphql 서버프로그램
 */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// 1)
// API-DOCS 만들기
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// 2)
// API 만들기
const resolvers = {
  Query: {
    hello: () => "world",
  },
};

// 3)
const server = new ApolloServer({
  typeDefs, // 위에 있는 typeDefs
  resolvers, // 위에 있는 resolvers
});

/**
 * [학습] 18-ORM과 DB연동
 */
// 접속해서 연결 (방법은 ORM docs에 잘 나와있음)
import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.242", // 데이터베이스 설치된 컴퓨터 IP 주소
  port: 5001, //데이터베이스 설치된 컴퓨터 포트
  username: "postgres",
  password: "postgres2023",
  database: "postgres", // 데이터베이스 타입
  entities: [Board], // 내가 만든 테이블
  synchronize: true, // 내가 만든 보드 테이블과 데이터베이스의 테이블과 실제로 똑같이 만들어 달라는 요청
  logging: true, //과정 보여주기
});

// initialize: 실행 .then: 성공시
AppDataSource.initialize()
  .then(() => {
    console.log("DB 접속 성공!!!");

    // 4)
    // startStandaloneServer : 서버를 실행
    startStandaloneServer(server).then(() => {
      console.log("서버 실행!!!");
    });
  })
  .catch((error) => {
    console.log("DB 접속 실패!!!");
    console.log("원인 : " + error);
  });
