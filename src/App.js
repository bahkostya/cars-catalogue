import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Details } from 'pages';
import { Header, Footer } from 'components';

import styles from './App.module.scss';

const App = () => (
  <Router>
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
