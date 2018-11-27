import { fetchCarByStockNumber } from 'utils/api';

export const FETCH_CAR_REQUEST = 'FETCH_CAR_REQUEST';
export const FETCH_CAR_FAILURE = 'FETCH_CAR_FAILURE';
export const FETCH_CAR_SUCCESS = 'FETCH_CAR_SUCCESS';

export const fetchCarRequest = () => ({
  type: FETCH_CAR_REQUEST,
});

export const fetchCarFailure = error => ({
  type: FETCH_CAR_FAILURE,
  error,
});

export const fetchCarSuccess = (data, totalPageCount) => ({
  type: FETCH_CAR_SUCCESS,
  payload: {
    data,
  },
});

export const getCarByStockNumber = stockNumber => async dispatch => {
  dispatch(fetchCarRequest());

  try {
    const { car } = await fetchCarByStockNumber(stockNumber);

    dispatch(fetchCarSuccess(car));
  } catch (error) {
    dispatch(fetchCarFailure(error));
  }
};
