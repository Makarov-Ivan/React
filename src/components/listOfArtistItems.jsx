import React from 'react';
import PropTypes from 'prop-types';

export const ListOfArtistItems = () => {
  return (
    <ArtistItem />
  )
}

const ArtistItem = ({ name, link, genres, image }) => {
  return (
    <div className="artist">
      <h2>{name}</h2>
      <p>{link}</p>
      <p>{genres.join(' ')}</p>
      <img src="" alt="" />
    </div>
  )
}
ArtistItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  genres: PropTypes.array,
  image: PropTypes.array
};