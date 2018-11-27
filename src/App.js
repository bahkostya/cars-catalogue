import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { Home, Details } from 'modules';
import { Header, Footer, NotFound } from 'components';

import styles from './App.module.scss';
import { history } from 'utils/router';

const App = () => (
  <Router history={history}>
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
