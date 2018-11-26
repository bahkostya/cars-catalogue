import {
  FETCH_CARS_DATA_REQUEST,
  FETCH_CARS_DATA_FAILURE,
  FETCH_CARS_DATA_SUCCESS,
  FETCH_FILTERS_FAILURE,
  FETCH_FILTERS_REQUEST,
  FETCH_FILTERS_SUCCESS,
  SET_FILTERS,
} from './actions';

const initialCarsState = {
  isLoading: false,
  error: null,
  data: [],
  searchData: {
    totalPageCount: 0,
    currentPage: 1,
  },
};

export function cars(state = initialCarsState, action) {
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
        searchData: initialCarsState.searchData,
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

const defaultColorFilter = {
  value: '',
  label: 'All cars colors',
};

const defaultManufacturersFilter = {
  value: '',
  label: 'All manufacturers',
};

const initialFiltersState = {
  colors: [defaultColorFilter],
  manufacturers: [defaultManufacturersFilter],
  isLoading: false,
  error: null,
  currentColor: defaultColorFilter,
  currentManufacturer: defaultManufacturersFilter,
  sortBy: { value: '', label: 'None' },
};

export function filters(state = initialFiltersState, action) {
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
