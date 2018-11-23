import React, { PureComponent } from 'react';

import Button from '../Button/Button';

import styles from './Filters.module.scss';

class Filters extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.button}>
          <Button>Filter</Button>
        </div>
      </div>
    );
  }
}

export default Filters;
