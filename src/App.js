import React, { useEffect, useState } from 'react';
import './App.css';

import * as API from "./API/api";

import { Login } from "./components/logIn";
import { IsLoggedIn } from "./components/isLoggedIn";
import { LogoComponent } from "./components/logo";

function App() {
  let [isLogedIn, logIn] = useState(false)
  let [codeToken, setCodeToken] = useState('')
  useEffect(() => {
    if (API.isCodeTokenInURL()) {
      logIn(true)
      setCodeToken(API.defineCodeToken())
      console.log(codeToken);
      // console.log('code ', API.defineCodeToken())
    }

  }, [codeToken, isLogedIn])
  if (isLogedIn) {
    return (
      <React.Fragment>
        <LogoComponent />
        <IsLoggedIn />
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
