import { fetchAllCars } from 'utils/api';

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

export const fetchCarsDataSuccess = (data, searchData) => ({
  type: FETCH_CARS_DATA_SUCCESS,
  payload: {
    data,
    searchData,
  },
});

export const getAllCars = (page, manufacturer, color, sort) => async (
  dispatch,
  getState
) => {
  dispatch(fetchCarsDataRequest());

  try {
    const { cars, totalPageCount } = await fetchAllCars(
      page,
      manufacturer,
      color,
      sort
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
