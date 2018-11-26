import { fetchAllCars } from 'utils/api';
import { fetchColorsFilters, fetchManufacturersFilters } from '../../utils/api';

export const FETCH_CARS_DATA_REQUEST = 'FETCH_CARS_DATA_REQUEST';
export const FETCH_CARS_DATA_FAILURE = 'FETCH_CARS_DATA_FAILURE';
export const FETCH_CARS_DATA_SUCCESS = 'FETCH_CARS_DATA_SUCCESS';
export const FETCH_FILTERS_REQUEST = 'FETCH_FILTERS_REQUEST';
export const FETCH_FILTERS_FAILURE = 'FETCH_FILTERS_FAILURE';
export const FETCH_FILTERS_SUCCESS = 'FETCH_FILTERS_SUCCESS';
export const SET_FILTERS = 'SET_FILTERS';

export const fetchCarsDataRequest = () => ({
  type: FETCH_CARS_DATA_REQUEST,
});

export const fetchCarsDataFailure = error => ({
  type: FETCH_CARS_DATA_FAILURE,
  error,
});

export const fetchCarsDataSuccess = (data, searchData) => ({
  type: FETCH_CARS_DATA_SUCCESS,
  payload: {
    data,
    searchData,
  },
});

export const getAllCars = page => async (dispatch, getState) => {
  dispatch(fetchCarsDataRequest());

  const {
    filters: { currentColor, currentManufacturer, sortBy },
  } = getState();

  console.log(currentManufacturer);

  try {
    const { cars, totalPageCount } = await fetchAllCars(
      page,
      currentManufacturer.value,
      currentColor.value,
      sortBy.value
    );

    const searchData = {
      currentPage: page,
      totalPageCount,
    };

    dispatch(fetchCarsDataSuccess(cars, searchData));
  } catch (error) {
    dispatch(fetchCarsDataFailure(error));
  }
};

export const fetchFiltersRequest = () => ({
  type: FETCH_FILTERS_REQUEST,
});

export const fetchFiltersFailure = error => ({
  type: FETCH_FILTERS_FAILURE,
  error,
});

export const fetchFiltersSuccess = (data, filterName) => ({
  type: FETCH_FILTERS_SUCCESS,
  payload: {
    data,
    filterName,
  },
});

export const getColors = () => async (dispatch, getState) => {
  dispatch(fetchFiltersRequest());

  try {
    const { colors } = await fetchColorsFilters();

    dispatch(
      fetchFiltersSuccess(
        colors.map(value => ({ value, label: value })),
        'colors'
      )
    );
  } catch (error) {
    dispatch(fetchFiltersFailure(error));
  }
};

export const getManufacturers = () => async (dispatch, getState) => {
  dispatch(fetchFiltersRequest());

  try {
    const { manufacturers } = await fetchManufacturersFilters();

    dispatch(
      fetchFiltersSuccess(
        manufacturers.map(({ name }) => ({ value: name, label: name })),
        'manufacturers'
      )
    );
  } catch (error) {
    dispatch(fetchFiltersFailure(error));
  }
};

export const setFilters = data => ({
  type: SET_FILTERS,
  payload: {
    data,
  },
});
