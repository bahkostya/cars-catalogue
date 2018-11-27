import {
  FETCH_FILTERS_FAILURE,
  FETCH_FILTERS_REQUEST,
  FETCH_FILTERS_SUCCESS,
  SET_FILTERS,
} from './actions';

const defaultColorFilter = {
  value: '',
  label: 'All cars colors',
};

const defaultManufacturersFilter = {
  value: '',
  label: 'All manufacturers',
};

const initialState = {
  colors: [defaultColorFilter],
  manufacturers: [defaultManufacturersFilter],
  isLoading: false,
  error: null,
  currentColor: '',
  currentManufacturer: '',
  sortBy: '',
  currentPage: 1,
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILTERS_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };

    case FETCH_FILTERS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case FETCH_FILTERS_SUCCESS:
      return {
        ...state,
        [action.payload.filterName]: [
          ...state[action.payload.filterName],
          ...action.payload.data,
        ],
        error: null,
        isLoading: false,
      };

    case SET_FILTERS:
      return {
        ...state,
        ...action.payload.data,
      };

    default:
      return state;
  }
}
