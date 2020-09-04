import React, { useState, useEffect } from 'react';
import './SearchForm.scss';
import * as API from "../API/api";
import { useSelector, useDispatch } from 'react-redux';

import { albumActionCreator } from "../redux/album/actionCreater";
import {
  albumSearchStart,
  albumSearchSuccess,
  albumSearchFailure,
  albumGetDataSuccess,
  albumGetDataFailure,
} from "../redux/album/actionTypes";

import { artistActionCreator } from '../redux/artist/actionCreater'
import {
  artistSearchStart,
  artistSearchSuccess,
  artistSearchFailure,
  artistGetDataSuccess,
  artistGetDataFailure,
} from "../redux/artist/actionTypes";

import { playlistActionCreator } from '../redux/playlist/actionCreater'
import {
  playlistSearchStart,
  playlistSearchSuccess,
  playlistSearchFailure,
  playlistGetDataSuccess,
  playlistGetDataFailure,
} from "../redux/playlist/actionTypes";

import { trackActionCreator } from '../redux/track/actionCreater'
import {
  trackSearchStart,
  trackSearchSuccess,
  trackSearchFailure,
  trackGetDataSuccess,
  trackGetDataFailure,
} from "../redux/track/actionTypes";


export const SearchForm = () => {
  const [isSubmited, submit] = useState(false)

  let querrtParams = '';
  const accessToken = useSelector(store => store.token.access_token)

  const TogleForm = () => {
    if (qeryString) {
      submit(!isSubmited)
    }
    else {
      alert('fill text input!')
    }
  }

  const dispatch = useDispatch()

  const storeData = (data) => {
    if (data.albums) {
      console.log('data contains albums');
      dispatch(albumActionCreator(albumGetDataSuccess, data.albums.items))
    }
    if (data.artists) {
      console.log('data contains artists');
      dispatch(artistActionCreator(artistGetDataSuccess, data.artists.items))
    }
    if (data.playlists) {
      console.log('data contains playlists');
      dispatch(artistActionCreator(playlistGetDataSuccess, data.playlists.items))
    }
    if (data.tracks) {
      console.log('data contains tracks');
      dispatch(artistActionCreator(trackGetDataSuccess, data.tracks.items))
    }
  }

  const [qeryString, setQeryString] = useState('')
  const [types, setType] = useState({
    album: false,
    artist: false,
    playlist: false,
    track: false,
    show: false,
    episode: false
  })
  const [limit, setLimit] = useState(20)

  useEffect(() => {
    if (isSubmited) {
      querrtParams = `?q=${qeryString}&type=${
        (() => {
          let type = []
          for (let k in types) {
            if (types[k]) {
              type.push(k)
            }
          }
          return type;
        })()
        }&limit=${limit}`
      API.searchRequest(accessToken, querrtParams).then(response => {
        console.log(response);
        storeData(response)
      });
    }
  }, [TogleForm, isSubmited, limit, qeryString, types])

  return (
    <div className="serachForm">
      <SearchField setQeryString={setQeryString} />
      <ListOfTypeBtns setType={setType} type={types} />
      <Limit limit={limit} setLimit={setLimit} />
      <SearchButton TogleForm={TogleForm} />
    </div>
  )
}

const SearchField = ({ setQeryString, qeryString }) => {
  const [searchContent, setSearchContent] = useState('');

  useEffect(() => {
    if (searchContent) {
      console.log('changed')
      setQeryString(searchContent.replace(/\s/g, '%20'))
    }
  }, [searchContent, setQeryString])

  return (
    <input
      type="search"
      name="search"
      id="search"
      required
      value={searchContent}
      onChange={async (e) => { await setSearchContent(e.target.value) }}
    />
  )
}

const ListOfTypeBtns = ({ setType, type }) => {
  return (
    <div className="list">
      <label htmlFor='album'>album
        <input type="checkbox" name="type" id="album" onChange={async (e) => {
          await setType({ ...type, [e.target.id]: !type[e.target.id] })
        }} />
      </label>
      <label htmlFor='artist'>artist
        <input type="checkbox" name="type" id="artist" onChange={async (e) => {
          await setType({ ...type, [e.target.id]: !type[e.target.id] })
        }} />
      </label>
      <label htmlFor='playlist'>playlist
        <input type="checkbox" name="type" id="playlist" onChange={async (e) => {
          await setType({ ...type, [e.target.id]: !type[e.target.id] })
        }} />
      </label>
      <label htmlFor='track'>track
        <input type="checkbox" name="type" id="track" onChange={async (e) => {
          await setType({ ...type, [e.target.id]: !type[e.target.id] })
        }} />
      </label>
      {/* <label htmlFor='show'>show
        <input type="checkbox" name="type" id="show" onChange={async (e) => {
          await setType({ ...type, [e.target.id]: !type[e.target.id] })
        }} />
      </label>
      <label htmlFor='episode'>episode
        <input type="checkbox" name="type" id="episode" onChange={async (e) => {
          await setType({ ...type, [e.target.id]: !type[e.target.id] })
        }} />
      </label> */}
    </div>
  )
}

const Limit = ({ setLimit, limit }) => {
  return (
    <React.Fragment>
      <label htmlFor="limit">Limit:</label>
      <input type="range" name="" id="limit" value={limit} min='1' max='50' step='1' onChange={(e) => { setLimit(e.target.value) }} />
      <div>{limit}</div>
    </React.Fragment>
  )
}

const SearchButton = ({ TogleForm }) => {
  return (
    <input type="button" value="Search" onClick={TogleForm} />
  )
}


