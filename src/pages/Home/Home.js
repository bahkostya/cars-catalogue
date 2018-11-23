import React, { Component } from 'react';

import styles from './Home.module.scss';
import { Filters } from 'components';

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
