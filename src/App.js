import React from 'react';

import Routes from './Routes';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.container}>
    {/* <header>HEADER</header> */}
    <Routes />
    {/* <footer>FOOTER</footer> */}
  </div>
);

export default App;
