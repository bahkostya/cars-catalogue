import {
  FETCH_CARS_DATA_REQUEST,
  FETCH_CARS_DATA_FAILURE,
  FETCH_CARS_DATA_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  totalPageCount: 0,
};

export default function cars(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS_DATA_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };

    case FETCH_CARS_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        totalPageCount: initialState.totalPageCount,
      };

    case FETCH_CARS_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        data: action.payload.data,
        totalPageCount: action.payload.totalPageCount,
      };

    default:
      return state;
  }
}
