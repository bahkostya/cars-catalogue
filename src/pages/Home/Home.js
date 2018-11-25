import React, { Component } from 'react';
import 'react-dropdown/style.css';

import { Filters } from 'components';
import styles from './Home.module.scss';

class Home extends Component {
  render() {
    return (
      <main role="main" className={styles.container}>
        <aside className={styles.sidebar}>
          <Filters />
        </aside>
        <section className={styles.mainContent}>section</section>
      </main>
    );
  }
}

export default Home;
