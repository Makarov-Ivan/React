import React from 'react';
import PropTypes from 'prop-types';

export const ListOfAlbumItems = () => {

}
const AlbumItem = ({ name, link, img, date, totalTracks, artist }) => {
  return (
    <div className="albumItem">
      <a href={link}>
        <p>{name}</p>
      </a>
      <p>date: {date}</p>
      <p>total tracks: {totalTracks}</p>
      <p>Artists: {artist.join(', ')}</p>
    </div>
  )
}
AlbumItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  img: PropTypes.array,
  date: PropTypes.string,
  totalTracks: PropTypes.string,
  artist: PropTypes.array,
}
// Name , Spotify link, Image (first from Images array), Release date, Total tracks, List of artists (joined by comma)