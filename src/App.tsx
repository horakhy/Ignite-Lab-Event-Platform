import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";
import { Event } from "./components/pages/Event";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  // const apollo = useQuery(GET_LESSONS_QUERY);
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
