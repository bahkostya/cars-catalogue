import React, { PureComponent } from 'react';

import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

import styles from './Filters.module.scss';

const colors = ['red', 'blue', 'green', 'black', 'yellow', 'white', 'silver'];

class Filters extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.dropdown}>
          <Dropdown label="Color" options={colors} value="default val" />
        </div>
        <div className={styles.dropdown}>
          <Dropdown label="Manufacturer" options={colors} value="default val" />
        </div>
        <div className={styles.button}>
          <Button>Filter</Button>
        </div>
      </div>
    );
  }
}

export default Filters;
