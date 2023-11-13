// import "../styles/globals.css";
// GraphQL 세팅
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component }: AppProps) {
  // GraphQL 세팅
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), //컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아볼 예정
  });

  return (
    // 아래 컴포넌트에서 GraphQL을 사용할 수 있도록 감싸줌
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <>
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloProvider>
  );
}
