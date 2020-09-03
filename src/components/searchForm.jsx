import React, { useState, useEffect } from 'react';
import './SearchForm.scss';

export const SearchForm = () => {
  const [isSubmited, submit] = useState(false)

  const TogleForm = () => {
    submit(!isSubmited)
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
      alert(
        `QUERY PARAMETER
        q: ${qeryString},
      type: ${(() => {
          let type = []
          for (let k in types) {
            if (types[k]) {
              type.push(k)
            }
          }
          return type;
        })()};
      limit: ${ limit} `)
      TogleForm();
      setQeryString('')
      setType([])
      setLimit(20)
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
      <label htmlFor='show'>show
        <input type="checkbox" name="type" id="show" onChange={async (e) => {
          await setType({ ...type, [e.target.id]: !type[e.target.id] })
        }} />
      </label>
      <label htmlFor='episode'>episode
        <input type="checkbox" name="type" id="episode" onChange={async (e) => {
          await setType({ ...type, [e.target.id]: !type[e.target.id] })
        }} />
      </label>
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