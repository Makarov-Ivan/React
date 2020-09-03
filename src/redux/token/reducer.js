const tokenInitialState = {
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
        refresh_token: action.payload.expires_in
      };
    case 'TOKEN_ERROR':
      return {
        ...tokenState,
        error: action.payload.error
      };

    default:
      return tokenState;
  }
}