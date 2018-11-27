import {
  FETCH_CAR_REQUEST,
  FETCH_CAR_FAILURE,
  FETCH_CAR_SUCCESS,
} from './actions';

const initialState = {
  data: {
    stockNumber: '',
    manufacturerName: '',
    modelName: '',
    mileage: {
      number: 0,
      unit: 'km',
    },
    fuelType: '',
    color: '',
    pictureUrl: '',
  },
  error: null,
  isLoading: false,
};

export default function details(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAR_REQUEST:
      return {
        ...state,
        data: initialState.data,
        error: null,
        isLoading: true,
      };

    case FETCH_CAR_FAILURE:
      return {
        ...state,
        data: initialState.data,
        error: action.error,
        isLoading: false,
      };

    case FETCH_CAR_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        isLoading: false,
      };

    default:
      return state;
  }
}
