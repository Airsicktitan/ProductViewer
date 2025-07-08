import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8080/query", // Adjust the URI to your GraphQL server endpoint
  cache: new InMemoryCache(),
});

export default client;
