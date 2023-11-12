// GraphQL 세팅
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";

export default function App({ Component }: AppProps) {
  return (
    <div>
      <div>====================== 여기는 _app.js 컴포넌트 시작부분 입니다. ======================</div>
      {/* // 아래 컴포넌트에서 GraphQL을 사용할 수 있도록 감싸줌 */}
      <ApolloSetting>
        <Layout>
          <Component />
        </Layout>
      </ApolloSetting>
      <div>====================== 여기는 _app.js 컴포넌트 끝부분 입니다. ======================</div>
    </div>
  );
}
