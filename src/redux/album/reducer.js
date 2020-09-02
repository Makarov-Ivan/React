const albumInitialState = {
  isLoading: false,
  data: [],
  error: '',
}

export const albumReducer = (albumState = albumInitialState, action) => {
  switch (action.type) {
    case 'SEARCH_START':
      return {
        ...albumState,
        isLoading: true
      };
    case 'SEARCH_SUCCESS':
      return {
        ...albumState,
        isLoading: false
      };
    case 'SEARCH_FAILURE':
      return {
        ...albumState,
        error: action.payload
      };
    case 'GET_DATA_SUCCESS':
      return {
        ...albumState,
        data: albumState.data.push(action.payload)
      };
    case 'GET_DATA_FAILURE':
      return {
        ...albumState,
        error: action.payload
      };
    default:
      return albumState;
  }
}