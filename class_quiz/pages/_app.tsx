import { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";

export default function App({ Component }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
  });

  // GraphQL 세팅
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아볼 예정
  });

  return (
    <ApolloProvider client={client}>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloProvider>
  );
}
