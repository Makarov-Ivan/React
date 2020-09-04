const trackInitialState = {
  isLoading: false,
  data: [],
  error: '',
}

export const trackReducer = (trackState = trackInitialState, action) => {
  switch (action.type) {
    case 'TRACK_SEARCH_START':
      return {
        ...trackState,
        isLoading: true
      };
    case 'TRACK_SEARCH_SUCCESS':
      return {
        ...trackState,
        isLoading: false
      };
    case 'TRACK_SEARCH_FAILURE':
      return {
        ...trackState,
        error: action.payload
      };
    case 'TRACK_GET_DATA_SUCCESS':
      return {
        ...trackState,
        data: action.payload
      };
    case 'TRACK_GET_DATA_FAILURE':
      return {
        ...trackState,
        error: action.payload
      };
    default:
      return trackState;
  }
}