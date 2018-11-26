import React, { PureComponent } from 'react';

import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

import styles from './Filters.module.scss';

class Filters extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: props.currentColor,
      currentManufacturer: props.currentManufacturer,
    };
  }

  handleChangeColorChange = currentColor =>
    this.setState({
      currentColor,
    });

  handleChangeManufacturer = currentManufacturer =>
    this.setState({
      currentManufacturer,
    });

  handleFilterClick = () => {
    const { currentColor, currentManufacturer } = this.state;

    this.props.onSubmit({
      currentColor,
      currentManufacturer,
    });
  };

  render() {
    const { currentColor, currentManufacturer } = this.state;
    const { colors, manufacturers } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.dropdown}>
          <Dropdown
            label="Color"
            options={colors}
            value={currentColor}
            onChange={this.handleChangeColorChange}
          />
        </div>
        <div className={styles.dropdown}>
          <Dropdown
            label="Manufacturer"
            options={manufacturers}
            value={currentManufacturer}
            onChange={this.handleChangeManufacturer}
          />
        </div>
        <div className={styles.button}>
          <Button onClick={this.handleFilterClick}>Filter</Button>
        </div>
      </div>
    );
  }
}

export default Filters;
