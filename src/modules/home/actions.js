import queryString from 'query-string';

import { fetchAllCars } from 'utils/api';
import { setFilters } from '../filters/actions';
import { history } from '../../utils/router';

export const FETCH_CARS_DATA_REQUEST = 'FETCH_CARS_DATA_REQUEST';
export const FETCH_CARS_DATA_FAILURE = 'FETCH_CARS_DATA_FAILURE';
export const FETCH_CARS_DATA_SUCCESS = 'FETCH_CARS_DATA_SUCCESS';

export const fetchCarsDataRequest = () => ({
  type: FETCH_CARS_DATA_REQUEST,
});

export const fetchCarsDataFailure = error => ({
  type: FETCH_CARS_DATA_FAILURE,
  error,
});

export const fetchCarsDataSuccess = (data, totalPageCount) => ({
  type: FETCH_CARS_DATA_SUCCESS,
  payload: {
    data,
    totalPageCount,
  },
});

export const getAllCars = (currentPage = 1) => async (dispatch, getState) => {
  dispatch(setFilters({ currentPage }));
  dispatch(fetchCarsDataRequest());

  const { filters } = getState();

  try {
    const { cars, totalPageCount } = await fetchAllCars(filters);

    dispatch(fetchCarsDataSuccess(cars, totalPageCount));
    updateUrl(filters);
  } catch (error) {
    dispatch(fetchCarsDataFailure(error));
  }
};

export const fetchFilteredCars = (filtersData, page) => dispatch => {
  dispatch(setFilters(filtersData));
  dispatch(getAllCars(page));
};

export const updateUrl = ({
  currentPage,
  currentManufacturer,
  currentColor,
  sortBy,
}) => {
  const searchObject = {};

  if (currentPage) {
    searchObject.page = currentPage;
  }
  if (currentManufacturer) {
    searchObject.manufacturer = currentManufacturer;
  }
  if (currentColor) {
    searchObject.color = currentColor;
  }
  if (sortBy) {
    searchObject.sort = sortBy;
  }

  const searchString = queryString.stringify(searchObject);

  history.push(`/?${searchString}`);
};
