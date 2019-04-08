
import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import App from "./App";

import resolvers from "./apollo/resolvers";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers,
  link: new HttpLink({
    uri: "http://localhost:4000"
  })
});

// This is where you can setup your initial state.
cache.writeData({
  data: {}
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
