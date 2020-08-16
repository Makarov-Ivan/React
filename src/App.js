import React, { useEffect, useState } from 'react';
import './App.css';

import * as API from "./API/api";

import { Login } from "./components/logIn";
import { IsLoggedIn } from "./components/isLoggedIn";
import { LogoComponent } from "./components/logo";

function App() {
  let [isLogedIn, logIn] = useState(false)
  useEffect(() => {
    if (API.isCodeTokenInURL()) {
      logIn(true)
    }

  }, [])
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
