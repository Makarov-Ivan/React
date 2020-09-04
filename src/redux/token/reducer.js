const tokenInitialState = {
  initial_key: null,
  access_token: null,
  expires_in: null,
  refresh_token: null,
  error: null
}

export const tokenReducer = (tokenState = tokenInitialState, action) => {
  switch (action.type) {
    case 'TOKEN_SET':
      return {
        ...tokenState,
        access_token: action.payload.access_token,
        expires_in: action.payload.expires_in,
        refresh_token: action.payload.refresh_token
      };
    case 'TOKEN_ERROR':
      return {
        ...tokenState,
        error: action.payload.error
      };
    case 'TOKEN_SET_INITIAL':
      return {
        ...tokenState,
        initial_key: action.payload
      }
    default:
      return tokenState;
  }
}