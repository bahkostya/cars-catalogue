import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Filters, Dropdown, ListItem, Pagination } from 'components';
import { getAllCars } from './actions';

import 'react-dropdown/style.css';
import styles from './Home.module.scss';

const sortOptions = [
  { value: '', label: 'None' },
  { value: 'asc', label: 'Mileage - Ascending' },
  { value: 'desc', label: 'Mileage - Descending' },
];

class Home extends Component {
  componentDidMount() {
    this.props.getAllCars(1);
  }

  renderCarsList = ({
    stockNumber,
    manufacturerName,
    modelName,
    color,
    mileage: { number, unit },
    fuelType,
    pictureUrl,
  }) => {
    const title = `${manufacturerName} ${modelName}`;
    const description = `Stock # ${stockNumber} - ${number} ${unit} - ${fuelType} - ${color}`;

    return (
      <ListItem
        key={stockNumber}
        title={title}
        description={description}
        imgSrc={pictureUrl}
        id={stockNumber}
      />
    );
  };

  handleFetchFirstPage = () => {
    const { getAllCars } = this.props;
    getAllCars(1);
  };

  handleFetchPrevPage = () => {
    const { currentPage, getAllCars } = this.props;
    getAllCars(currentPage - 1);
  };

  handleFetchNextPage = () => {
    const { currentPage, getAllCars, totalPageCount } = this.props;
    getAllCars(currentPage + 1);
  };

  handleFetchLastPage = () => {
    const { getAllCars, totalPageCount } = this.props;
    getAllCars(totalPageCount);
  };

  render() {
    const { cars, currentPage, totalPageCount } = this.props;
    return (
      <main role="main" className={styles.container}>
        <aside className={styles.sidebar}>
          <Filters />
        </aside>
        <section className={styles.mainContent}>
          <div className={styles.header}>
            <div>
              <h1 className={styles.title}>Available cars</h1>
              <p className={styles.subTitle}>
                {/*impossible to calculate proper total cars amount*/}
                Showing 10 of {totalPageCount * 10} results
              </p>
            </div>
            <div className={styles.sortDropdown}>
              <Dropdown
                label="Sort by"
                options={sortOptions}
                value={sortOptions[0]}
              />
            </div>
          </div>
          <div className={styles.list}>{cars.map(this.renderCarsList)}</div>
          <Pagination
            total={totalPageCount}
            currentPage={currentPage}
            onFirstClick={this.handleFetchFirstPage}
            onLastClick={this.handleFetchLastPage}
            onPrevClick={this.handleFetchPrevPage}
            onNextClick={this.handleFetchNextPage}
          />
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  cars: state.cars.data,
  currentPage: state.cars.searchData.currentPage,
  totalPageCount: state.cars.searchData.totalPageCount,
});

export default connect(
  mapStateToProps,
  { getAllCars }
)(Home);
