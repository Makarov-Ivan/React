const artistInitialState = {
  isLoading: false,
  data: [],
  error: '',
}

export const artistReducer = (artistState = artistInitialState, action) => {
  switch (action.type) {
    case 'SEARCH_START':
      return {
        ...artistState,
        isLoading: true
      };
    case 'SEARCH_SUCCESS':
      return {
        ...artistState,
        isLoading: false
      };
    case 'SEARCH_FAILURE':
      return {
        ...artistState,
        error: action.payload
      };
    case 'GET_DATA_SUCCESS':
      return {
        ...artistState,
        data: artistState.data.push(action.payload)
      };
    case 'GET_DATA_FAILURE':
      return {
        ...artistState,
        error: action.payload
      };
    default:
      return artistState;
  }
}