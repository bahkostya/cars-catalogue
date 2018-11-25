import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Details } from './pages';
import { Header } from 'components';

import styles from './App.module.scss';

const App = () => (
  <Router>
    <Fragment>
      <Header />
      <div className={styles.container}>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
      </div>
    </Fragment>
  </Router>
);

export default App;
