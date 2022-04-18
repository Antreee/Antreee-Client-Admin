import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://d228-2001-448a-6040-fa9b-d7a-8c8c-756e-c27c.ngrok.io',
    cache: new InMemoryCache()
  });

  export default client