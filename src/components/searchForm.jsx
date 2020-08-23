import React, { useState } from 'react';

export const SearchForm = () => {

  return (
    <div className="serachForm">
      <SearchField />
      <ListOfTypeBtns />
      <Limit />
      <SearchButton />
    </div>
  )
}

const SearchField = () => {
  const [serahContent, setSearchContent] = useState('');
  const submit = () => {
    setSearchContent(() => { serahContent.replace(/\s/g, '%20') })
  }
  // eslint-disable-next-line no-unused-vars
  let s = submit()
  return (
    <input
      type="search"
      name="search"
      id="search"
      value={serahContent}
      onChange={(e) => { setSearchContent(e.target.value) }}
    />
  )
}

const ListOfTypeBtns = () => {
  return (
    <div className="list">
      <label for='album'>album</label>
      <input type="checkbox" name="type" id="album" />
      <label for='artist'>artist</label>
      <input type="checkbox" name="type" id="artist" />
      <label for='playlist'>playlist</label>
      <input type="checkbox" name="type" id="playlist" />
      <label for='track'>track</label>
      <input type="checkbox" name="type" id="track" />
      <label for='show'>show</label>
      <input type="checkbox" name="type" id="show" />
      <label for='episode'>episode</label>
      <input type="checkbox" name="type" id="episode" />
    </div>
  )
}

const Limit = () => {
  const [limit, setLimit] = useState()
  return (
    <React.Fragment>
      <label for="limit">Limit:</label>
      <input type="range" name="" id="limit" min='1' max='50' step='1' onChange={(e) => { setLimit(e.target.value) }} />
      <div>{limit}</div>
    </React.Fragment>
  )
}

const SearchButton = () => {
  return (
    <input type="submit" value="Search" />
  )
}