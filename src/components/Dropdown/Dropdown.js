import React from 'react';
import UnstyledDropdown from 'react-dropdown';

import styles from './Dropdown.module.scss';

const Dropdown = ({ label, options, placeholder, value, onChange }) => (
  <label className={styles.container}>
    {label}
    <UnstyledDropdown
      className={styles.select}
      controlClassName={styles.control}
      menuClassName={styles.menu}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </label>
);

Dropdown.defaultProps = {
  placeholder: 'Select...',
};

export default Dropdown;
