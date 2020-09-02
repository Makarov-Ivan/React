const playlistInitialState = {
  isLoading: false,
  data: [],
  error: '',
}

export const playlistReducer = (playlistState = playlistInitialState, action) => {
  switch (action.type) {
    case 'SEARCH_START':
      return {
        ...playlistState,
        isLoading: true
      };
    case 'SEARCH_SUCCESS':
      return {
        ...playlistState,
        isLoading: false
      };
    case 'SEARCH_FAILURE':
      return {
        ...playlistState,
        error: action.payload
      };
    case 'GET_DATA_SUCCESS':
      return {
        ...playlistState,
        data: playlistState.data.push(action.payload)
      };
    case 'GET_DATA_FAILURE':
      return {
        ...playlistState,
        error: action.payload
      };
    default:
      return playlistState;
  }
}