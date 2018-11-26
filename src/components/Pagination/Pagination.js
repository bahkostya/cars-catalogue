import React from 'react';

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
    <button
      className={styles.link}
      onClick={onFirstClick}
      disabled={currentPage === 1}
    >
      First
    </button>
    <button
      className={styles.link}
      onClick={onPrevClick}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <div className={styles.text}>
      Page {currentPage} of {total}
    </div>
    <button
      className={styles.link}
      onClick={onNextClick}
      disabled={currentPage === total}
    >
      Next
    </button>
    <button
      className={styles.link}
      onClick={onLastClick}
      disabled={currentPage === total}
    >
      Last
    </button>
  </nav>
);

export default Pagination;
