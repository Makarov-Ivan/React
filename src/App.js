import React, { useEffect } from 'react';
import './App.css';
import * as API from "./API/api";
import { Login } from "./components/logIn";
import { IsLoggedIn } from "./components/isLoggedIn";
import { LogoComponent } from "./components/logo";
import { useSelector, useDispatch } from 'react-redux';
import { setTokens, setKey } from './redux/token/actionTypes'
import { tokenActionCreator } from './redux/token/actionCreater'
import { SearchForm } from "./components/searchForm";
import { ConnectedListOfAlbumItem } from './components/ListOfAlbumItems'
import { ConnectedListOfArtistItems } from "./components/listOfArtistItems";
import { ConnectedListOfPlaylistItems } from "./components/listOfPlayListItems";
import { ConnectedListOfTeackItems } from "./components/listOfTeackItems";

function App() {
  const initialKey = useSelector(store => store.token.initial_key)
  const accessToken = useSelector(store => store.token.access_token)
  const dispatch = useDispatch()
  const store = useSelector(store => store)
  useEffect(() => {
    if (API.isCodeTokenInURL()) {
      dispatch(tokenActionCreator(setKey, API.defineCodeToken()))
    }
  }, [])

  useEffect(() => {
    if (initialKey) {
      window.history.replaceState(null, null, 'http://localhost:3000/')
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
            <SearchForm />
            {store.album.data ? (<ConnectedListOfAlbumItem />) : 'use search to get albums'} <br />
            {store.artist.data ? (<ConnectedListOfArtistItems />) : 'use search to get artists'}<br />
            {store.playlist.data ? (<ConnectedListOfPlaylistItems />) : 'use search to get playlists'}<br />
            {store.track.data ? (<ConnectedListOfTeackItems />) : 'use search to get traks'}<br />
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
