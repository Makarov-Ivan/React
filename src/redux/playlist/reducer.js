const playlistInitialState = {
  isLoading: false,
  data: null,
  error: '',
}

export const playlistReducer = (playlistState = playlistInitialState, action) => {
  switch (action.type) {
    case 'PLAYLIST_SEARCH_START':
      return {
        ...playlistState,
        isLoading: true
      };
    case 'PLAYLIST_SEARCH_SUCCESS':
      return {
        ...playlistState,
        isLoading: false
      };
    case 'PLAYLIST_SEARCH_FAILURE':
      return {
        ...playlistState,
        error: action.payload
      };
    case 'PLAYLIST_GET_DATA_SUCCESS':
      return {
        ...playlistState,
        data: action.payload
      };
    case 'PLAYLIST_GET_DATA_FAILURE':
      return {
        ...playlistState,
        error: action.payload
      };
    default:
      return playlistState;
  }
}