const tokenInitialState = {
  access_token: null,
  expires_in: null,
  refresh_token: null,
  error: null
}

export const tokenReducer = (tokenState = tokenInitialState, action) => {
  switch (action.type) {
    case 'SET_TOKENS':
      return {
        ...tokenState,
        access_token: action.access_token,
        expires_in: action.expires_in,
        refresh_token: action.expires_in
      };
    case 'ERROR':
      return {
        ...tokenState,
        error: action.error
      };

    default:
      return tokenState;
  }
}