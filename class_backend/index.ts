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

const qqq: string = "타입스크립트 페이지";

console.log(qqq);
