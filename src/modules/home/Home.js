import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-dropdown/style.css';

import { Filters, Dropdown, ListItem, Pagination } from 'components';
import { getAllCars, getColors, getManufacturers, setFilters } from './actions';

import styles from './Home.module.scss';

const sortOptions = [
  { value: '', label: 'None' },
  { value: 'asc', label: 'Mileage - Ascending' },
  { value: 'desc', label: 'Mileage - Descending' },
];

class Home extends Component {
  componentDidMount() {
    const { getColors, getAllCars, getManufacturers, currentPage } = this.props;

    getAllCars(currentPage);
    getColors();
    getManufacturers();
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
    const { currentPage, getAllCars } = this.props;
    getAllCars(currentPage + 1);
  };

  handleFetchLastPage = () => {
    const { getAllCars, totalPageCount } = this.props;
    getAllCars(totalPageCount);
  };

  handleFilter = ({ currentManufacturer, currentColor }) => {
    const { currentPage, getAllCars, setFilters } = this.props;

    setFilters({ currentManufacturer, currentColor });
    getAllCars(currentPage);
  };

  handleSort = sortBy => {
    const { currentPage, setFilters, getAllCars } = this.props;

    setFilters({ sortBy });
    getAllCars(currentPage);
  };

  render() {
    const {
      cars,
      currentPage,
      totalPageCount,
      colors,
      manufacturers,
      currentColor,
      currentManufacturer,
      sortBy,
    } = this.props;
    return (
      <main role="main" className={styles.container}>
        <aside className={styles.sidebar}>
          <Filters
            onSubmit={this.handleFilter}
            colors={colors}
            manufacturers={manufacturers}
            currentManufacturer={currentManufacturer}
            currentColor={currentColor}
          />
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
                value={sortBy}
                onChange={this.handleSort}
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
  colors: state.filters.colors,
  manufacturers: state.filters.manufacturers,
  currentColor: state.filters.currentColor,
  currentManufacturer: state.filters.currentManufacturer,
  sortBy: state.filters.sortBy,
});

export default connect(
  mapStateToProps,
  { getAllCars, getColors, getManufacturers, setFilters }
)(Home);
