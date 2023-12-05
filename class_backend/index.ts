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

/* ===================================================================================== */

/**
 * [학습] 18-게시판 API 만들기 실습
 */
import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";

/**
 * [학습] 18-graphql 서버프로그램
 */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// 1)
// API-DOCS 만들기 (typeDefs)
const typeDefs = `#graphql
  # 인자로 들어가는 type 은 input 을 붙여야한다.
  input CreateBoardInput {
    writer: String
    title: String
    Contents: String
  }

  # fetchBoards의 type
  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: Strin
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용 (example 방식)
    # createBoard(writer: String, title: String, Contents: String): String

    # 실무용 (practice)
    createBoard(createBoardInput: CreateBoardInput): String
  }
`;

// 2)
// API 만들기 (resolvers)
const resolvers = {
  // 2-1) fetchBoards 라는 Query 만들기
  Query: {
    fetchBoards: async () => {
      // Board 테이블에 있는 걸 가져옴
      // (데이터를 꺼내올 때까지 기다려야 하므로 await 을 붙여줌)
      // 1. 모두 꺼내기 (삭제되지 않은 것만)
      const result = await Board.find({ where: { isDeleted: false } });
      console.log(result);

      // 2. 한개만 꺼내기 (where문 => 조건문)
      // const result2 = await Board.find({ where: { number: 3 } });

      // 꺼내온 값을 return
      return result;
    },
  },

  // 2-2) createBoard 라는 Mutation 만들기
  Mutation: {
    // args: 브라우저에서 받아온(input 등으로) 인자를 args라고 한다.
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      // Board 테이블에 데이터를 보냄
      await Board.insert({
        ...args.createInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      // 응답(response)
      return "게시글 등록에 성공했습니다.";
    },

    // updateBoard: async () => {
    //   // 3번 게시글의 writer를 "영희"로 바꿈
    //   await Board.update({ number: 3 }, { writer: "영희" });
    // },

    // deleteBoard: async () => {
    //   // 3번 게시글 삭제
    //   await Board.delete({ number: 3 });
    //   // 3번 게시글을 삭제했다고 치자(소프트 삭제) -> 데이터는 남겨놓도록
    //   // isDeleted: false (초기값 => 삭제되지 않음)
    //   // isDeleted: true (삭제)
    //   await Board.update({ number: 3 }, { isDeleted: true });
    //   // 게시글을 언제 삭제했는지를 알려주기 위해 날짜 저장
    //   // deletedAt: Null (초기값 => 삭제되지 않음)
    //   // deletedAt: new Date() (날짜 저장)
    //   await Board.update({ number: 3 }, { deletedAt: new Date() });
    // },
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

/**
 * [학습] 18-게시판 API 만들기 실습
 * (아래 부분은 API 만드는 부분이 더 중요하기 때문에 많이 중요하진 않음)
 */
const app = express();

// rest-api 만들기(/graphql 엔드포인트)
app.use(
  "/graphql",
  cors<cors.CorsRequest>({ origin: ["https://www.naver.com", "https://www.daum.net"] }), // origin : cors를 풀어주고싶은 url
  express.json(),
  expressMiddleware(server)
);
