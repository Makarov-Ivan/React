const trackInitialState = {
  isLoading: false,
  data: [],
  error: '',
}

export const trackReducer = (trackState = trackInitialState, action) => {
  switch (action.type) {
    case 'SEARCH_START':
      return {
        ...trackState,
        isLoading: true
      };
    case 'SEARCH_SUCCESS':
      return {
        ...trackState,
        isLoading: false
      };
    case 'SEARCH_FAILURE':
      return {
        ...trackState,
        error: action.payload
      };
    case 'GET_DATA_SUCCESS':
      return {
        ...trackState,
        data: trackState.data.push(action.payload)
      };
    case 'GET_DATA_FAILURE':
      return {
        ...trackState,
        error: action.payload
      };
    default:
      return trackState;
  }
}