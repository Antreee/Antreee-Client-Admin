import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://23ca-2001-448a-6040-fa9b-9cb9-9827-2a13-48dd.ngrok.io',
    cache: new InMemoryCache()
  });

  export default client