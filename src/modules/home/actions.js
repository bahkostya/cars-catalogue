import { fetchAllCars } from 'utils/api';
import { setFilters } from '../filters/actions';

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
  dispatch(fetchCarsDataRequest());

  const {
    filters: { currentColor, currentManufacturer, sortBy },
  } = getState();

  console.log(currentManufacturer);

  try {
    const { cars, totalPageCount } = await fetchAllCars(
      currentPage,
      currentManufacturer.value,
      currentColor.value,
      sortBy.value
    );

    dispatch(setFilters({ currentPage }));
    dispatch(fetchCarsDataSuccess(cars, totalPageCount));
  } catch (error) {
    dispatch(fetchCarsDataFailure(error));
  }
};

export const fetchFilteredCars = filtersData => dispatch => {
  dispatch(setFilters(filtersData));
  dispatch(getAllCars());
};
