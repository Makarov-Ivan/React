const albumInitialState = {
  isLoading: false,
  data: null,
  error: '',
}

export const albumReducer = (albumState = albumInitialState, action) => {
  switch (action.type) {
    case 'ALBUM_SEARCH_START':
      return {
        ...albumState,
        isLoading: true
      };
    case 'ALBUM_SEARCH_SUCCESS':
      return {
        ...albumState,
        isLoading: false
      };
    case 'ALBUM_SEARCH_FAILURE':
      return {
        ...albumState,
        error: action.payload
      };
    case 'ALBUM_GET_DATA_SUCCESS':
      return {
        ...albumState,
        data: action.payload
      };
    case 'ALBUM_GET_DATA_FAILURE':
      return {
        ...albumState,
        error: action.payload
      };
    default:
      return albumState;
  }
}