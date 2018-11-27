import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { ActionBlock, NotFound } from 'components';
import { getCarByStockNumber } from './actions';
import { getSavedItems } from 'utils/localStorage';

import styles from './Details.module.scss';
class Details extends PureComponent {
  state = {
    savedCars: getSavedItems(),
  };

  componentDidMount() {
    const { match, getCarByStockNumber } = this.props;

    getCarByStockNumber(match.params.id);
  }

  handleSaveCar = () => {
    const newSavedCars = new Set(this.state.savedCars).add(
      this.props.data.stockNumber
    );

    localStorage.setItem('savedCars', JSON.stringify(Array.from(newSavedCars)));

    this.setState({
      savedCars: getSavedItems(),
    });
  };

  handleRemoveCar = () => {
    const newSavedCars = this.state.savedCars.filter(
      savedStockNumber => savedStockNumber !== this.props.data.stockNumber
    );

    localStorage.setItem('savedCars', JSON.stringify(newSavedCars));

    this.setState({
      savedCars: getSavedItems(),
    });
  };

  checkIfCarSaved = (savedCars, stockNumber) => savedCars.includes(stockNumber);

  render() {
    const { data, isLoading, error } = this.props;

    if (isLoading) {
      return null;
    }

    if (error) {
      return <NotFound />;
    }

    const {
      stockNumber,
      manufacturerName,
      modelName,
      mileage: { number, unit },
      fuelType,
      color,
      pictureUrl,
    } = data;
    const title = `${manufacturerName} ${modelName}`;
    const description = `Stock # ${stockNumber} - ${number} ${unit} - ${fuelType} - ${color}`;
    const isSaved = this.state.savedCars.includes(stockNumber);

    return (
      <main className={styles.container}>
        <img className={styles.image} src={pictureUrl} alt={title} />
        <div className={styles.mainContent}>
          <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <p className={styles.text}>
              This car is currently available and can be delivered as soon as
              tomorrow morning. Please be aware that delivery times shown in
              this page are not definitive and may change due to bad weather
              conditions.
            </p>
          </div>
          <div className={styles.save}>
            <ActionBlock
              buttonLabel={isSaved ? 'Remove' : 'Save'}
              onClick={isSaved ? this.handleRemoveCar : this.handleSaveCar}
            >
              {isSaved ? (
                <p className={styles.text}>You saved this car.</p>
              ) : (
                <p className={styles.text}>
                  If you like this car, click the button and save it in your
                  collection of favourite items.
                </p>
              )}
            </ActionBlock>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  data: state.details.data,
  isLoading: state.details.isLoading,
  error: state.details.error,
});

export default connect(
  mapStateToProps,
  { getCarByStockNumber }
)(Details);
