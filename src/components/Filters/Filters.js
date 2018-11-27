import React, { PureComponent } from 'react';

import Dropdown from '../Dropdown/Dropdown';
import ActionBlock from '../ActionBlock/ActionBlock';

import styles from './Filters.module.scss';

class Filters extends PureComponent {
  state = {
    currentColor: '',
    currentManufacturer: '',
  };

  componentDidUpdate(prevProps) {
    const { currentColor, currentManufacturer } = this.props;

    if (currentColor && !prevProps.currentColor) {
      this.setState({
        currentColor,
      });
    }
    if (currentManufacturer && !prevProps.currentManufacturer) {
      this.setState({
        currentManufacturer,
      });
    }
  }

  handleChangeColorChange = ({ value }) =>
    this.setState({
      currentColor: value,
    });

  handleChangeManufacturer = ({ value }) =>
    this.setState({
      currentManufacturer: value,
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
      <ActionBlock onClick={this.handleFilterClick} buttonLabel="Filter">
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
      </ActionBlock>
    );
  }
}

export default Filters;
