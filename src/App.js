import React, { useEffect, useState } from 'react';
import './App.css';

import * as API from "./API/api";

import { Login } from "./components/logIn";
import { IsLoggedIn } from "./components/isLoggedIn";
import { LogoComponent } from "./components/logo";

function App() {
  let [isLogedIn, logIn] = useState(false)
  let [codeToken, setCodeToken] = useState('')
  let [accessToken, setAccessToken] = useState()
  let [refreshToken, setRefreshToken] = useState()
  let [expiresIn, setExpiresIn] = useState()

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
