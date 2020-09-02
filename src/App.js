import React, { useEffect, useState } from 'react';
import './App.css';

import * as API from "./API/api";

import { Login } from "./components/logIn";
import { IsLoggedIn } from "./components/isLoggedIn";
import { LogoComponent } from "./components/logo";
import { useSelector } from 'react-redux';

function App() {
  let [isLogedIn, logIn] = useState(false)
  let [codeToken, setCodeToken] = useState('')
  let [accessToken, setAccessToken] = useState()
  let [refreshToken, setRefreshToken] = useState()
  let [expiresIn, setExpiresIn] = useState()

  const reduxStore = useSelector(store => store)
  console.log('reduxStore: ', reduxStore);

  useEffect(() => {
    API.isCodeTokenInURL() ? logIn(true) : logIn(false)
    setCodeToken(API.defineCodeToken)
  }, [])

  useEffect(() => {
    API.requestAccessAndRefreshTokens(codeToken)
      .then(response => {
        console.log(response);
        setAccessToken(response.access_token);
        setRefreshToken(response.refresh_token);
        setExpiresIn(response.expires_in)
      })
  }, [isLogedIn, codeToken])

  useEffect(() => {
    if (expiresIn) {

      setInterval(() => {
        API.refreshAccessAndRefreshTokens(refreshToken).then((response) => {
          setAccessToken(response.access_token);
          alert('token updated');
        })
      }, Number(expiresIn) * 1000);
    }
  }, [expiresIn, refreshToken])

  // setInterval(() => {
  //   API.refreshAccessAndRefreshTokens.then(
  //     (response) => {
  //       setAccessToken(response.access_token);
  //     }
  //   )
  // }, expiresIn);

  if (isLogedIn) {
    return (
      <React.Fragment>
        <LogoComponent />
        <IsLoggedIn />
        <p>acess token</p>
        {accessToken}
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <LogoComponent />
        <Login />
      </React.Fragment>
    )
  }
}

export default App;
