import React, { useEffect, useState } from 'react';
import './App.css';

import { Login } from "./components/logIn";
import { IsLoggedIn } from "./components/isLoggedIn";
import { LogoComponent } from "./components/logo";

function App() {
  let [isLogedIn, logIn] = useState(false)
  // useEffect(() => {

  // })
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
