const artistInitialState = {
  isLoading: false,
  data: null,
  error: '',
}

export const artistReducer = (artistState = artistInitialState, action) => {
  switch (action.type) {
    case 'ARTIST_SEARCH_START':
      return {
        ...artistState,
        isLoading: true
      };
    case 'ARTIST_SEARCH_SUCCESS':
      return {
        ...artistState,
        isLoading: false
      };
    case 'ARTIST_SEARCH_FAILURE':
      return {
        ...artistState,
        error: action.payload
      };
    case 'ARTIST_GET_DATA_SUCCESS':
      return {
        ...artistState,
        data: action.payload
      };
    case 'ARTIST_GET_DATA_FAILURE':
      return {
        ...artistState,
        error: action.payload
      };
    default:
      return artistState;
  }
}