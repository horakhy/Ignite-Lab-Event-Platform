import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q9vt263n3c01xl7uyq91kv/master',
  cache: new InMemoryCache(),
});