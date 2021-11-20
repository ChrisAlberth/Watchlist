import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from './config/Router';

import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route exact={route.exact} path={route.path}>
            <Layout>{route.component}</Layout>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
