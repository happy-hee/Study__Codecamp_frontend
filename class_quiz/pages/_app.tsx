import { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import {globalStyles} from '../src/commons/styles/globalStyles'
 
export default function App({ Component }: AppProps) {
  // graphql 세팅
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
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
