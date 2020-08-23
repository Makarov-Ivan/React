import React from 'react';
import PropTypes from 'prop-types';

export const ListOfTeackItems = () => {

}
const TrackItem = ({ name, link, duration, popularity, albumName, albumLink, artistName, artistLink }) => {
  return (
    <div className="trakItem">
      <a href={link}>
        <p>{name}</p>
      </a>
      <p>{duration}</p>
      <p>{popularity}</p>
      <a href={albumLink}>
        <p>{albumName}</p>
      </a>
      <a href={artistLink}>
        <p>{artistName}</p>
      </a>
    </div>
  )
}
TrackItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  duration: PropTypes.string,
  popularity: PropTypes.string,
  albumName: PropTypes.string,
  albumLink: PropTypes.string,
  artistName: PropTypes.string,
  artistLink: PropTypes.string
}
// Name
// Spotify link 
// Duration 
// Popularity 
// Album name 
// Album Spotify link 
// Artist name 
// Artist Spotify link