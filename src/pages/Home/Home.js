import React, { Component } from 'react';
import 'react-dropdown/style.css';

import { Filters, Dropdown, ListItem, Pagination } from 'components';
import styles from './Home.module.scss';

const sortOptions = [
  { value: '', label: 'None' },
  { value: 'asc', label: 'Mileage - Ascending' },
  { value: 'desc', label: 'Mileage - Descending' },
];

class Home extends Component {
  render() {
    return (
      <main role="main" className={styles.container}>
        <aside className={styles.sidebar}>
          <Filters />
        </aside>
        <section className={styles.mainContent}>
          <div className={styles.header}>
            <div>
              <h1 className={styles.title}>Available cars</h1>
              <p className={styles.subTitle}>Showing 10 of 100 results</p>
            </div>
            <div className={styles.sortDropdown}>
              <Dropdown
                label="Sort by"
                options={sortOptions}
                value={sortOptions[0]}
              />
            </div>
          </div>
          <div className={styles.list}>
            <ListItem
              title="Mercedes-Benz Vito Tourer"
              description="Stock # 29839 - 107.613 KM - Petrol - Red"
            />
          </div>
          <Pagination total={10} currentPage={2} />
        </section>
      </main>
    );
  }
}

export default Home;
