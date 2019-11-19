import { GET_WEATHER, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };

    case GET_WEATHER:
      return {
        ...state,
        city: action.payload.cityName,
        weatherData: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
