import React from 'react';
import PropTypes from 'prop-types';

export const ListOfPlaylistItems = () => {

}
const PlaylistItem = ({ name, link, img, ownerName, trackCout }) => {
  return (
    <div className="playlistItem">
      <a href={link}>
        <p>{name}</p>
      </a>
      <img src="" alt="" />
      <p>Owner: {ownerName}</p>
      <p>Count: {trackCout}</p>
    </div>
  )
}
PlaylistItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.array,
  ownerName: PropTypes.string,
  trackCout: PropTypes.string,
}
// Name, Spotify lin, Image (first from Images array, Owner nam, Tracks count