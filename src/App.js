import React, { useEffect } from 'react';
import './App.css';
import * as API from "./API/api";
import { Login } from "./components/logIn";
import { IsLoggedIn } from "./components/isLoggedIn";
import { LogoComponent } from "./components/logo";
import { useSelector, useDispatch } from 'react-redux';
import { setTokens, setKey } from './redux/token/actionTypes'
import { tokenActionCreator } from './redux/token/actionCreater'

function App() {
  const initialKey = useSelector(store => store.token.initial_key)
  const accessToken = useSelector(store => store.token.access_token)
  const dispatch = useDispatch()

  useEffect(() => {
    if (API.isCodeTokenInURL()) {
      dispatch(tokenActionCreator(setKey, API.defineCodeToken()))
    }
  }, [])

  useEffect(() => {
    if (initialKey) {
      window.history.replaceState(null, null, 'http://localhost:3000/')
      console.log('initialKey: ', initialKey);
      API.requestAccessAndRefreshTokens(initialKey).then(response => {
        dispatch(tokenActionCreator(setTokens, response))
      });
    }
  }, [initialKey])

  return (
    <React.Fragment>
      <LogoComponent />
      {accessToken ?
        (
          <React.Fragment >
            <IsLoggedIn />
            <p>acess token</p>
            {accessToken}
          </React.Fragment >
        ) : (
          <React.Fragment>
            <Login />
          </React.Fragment>
        )}
    </React.Fragment>


  )
}

export default App;
