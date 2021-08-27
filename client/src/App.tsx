import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './pages/home';
import ListPage from './pages/list';
import ListsPage from './pages/lists';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const history = createBrowserHistory({
  basename: '/',
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list/" component={ListsPage} />
        <Route exact path="/list/:id" component={ListPage} />
      </Switch>
    </Router>
  </ApolloProvider>
)

export default App