import React from 'react';
import * as API from "../API/api";

export const Login = () => {
  return (

    <React.Fragment>

      <a href={API.makeAuthURL()}
        className="App-link"
        rel="noopener noreferrer"
        target="_self"
      >

        spot
      </a>
    </React.Fragment>
  )
}