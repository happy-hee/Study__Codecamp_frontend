import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component }) {
  // graphql 세팅
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  );
}
