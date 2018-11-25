import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Pagination.module.scss';

const Pagination = ({
  currentPage,
  total,
  onFirstClick,
  onLastClick,
  onPrevClick,
  onNextClick,
}) => (
  <nav className={styles.container}>
    <button className={styles.link} onClick={onFirstClick}>
      First
    </button>
    <button className={styles.link} onClick={onPrevClick}>
      Previous
    </button>
    <div className={styles.text}>
      Page {currentPage} of {total}
    </div>
    <button className={styles.link} onClick={onNextClick}>
      Next
    </button>
    <button className={styles.link} onClick={onLastClick}>
      Last
    </button>
  </nav>
);

export default Pagination;
