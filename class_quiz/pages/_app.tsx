import { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Layout from "../src/components/commons/layout";

export default function App({ Component }: AppProps) {
  // graphql 세팅
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component />
      </Layout>
    </ApolloProvider>
  );
}
