import {
  FETCH_CARS_DATA_REQUEST,
  FETCH_CARS_DATA_FAILURE,
  FETCH_CARS_DATA_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  searchData: {
    totalPageCount: 0,
    currentPage: 1,
  },
};

export default function(state = initialState, action) {
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
        searchData: initialState.searchData,
      };

    case FETCH_CARS_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        data: action.payload.data,
        searchData: action.payload.searchData,
      };

    default:
      return state;
  }
}
