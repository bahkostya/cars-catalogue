import React from 'react';
import { Router, Route } from 'react-router-dom';

import { Home, Details } from 'modules';
import { Header, Footer } from 'components';

import styles from './App.module.scss';
import { history } from 'utils/router';

const App = () => (
  <Router history={history}>
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
