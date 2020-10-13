import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/react-hooks';

const APOLLO_CLIENT = new ApolloClient({
  uri: "https://countries-274616.ew.r.appspot.com/",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={APOLLO_CLIENT}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);