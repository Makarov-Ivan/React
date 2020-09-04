import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ListOfArtistItems = ({ artists }) => {
  return (
    <React.Fragment>
      <h2>artist list</h2>
      {artists.map(el => ArtistItem(el))}
    </React.Fragment>
  )
}

const ArtistItem = ({ name, href, genres, images }) => {
  return (
    <div className="artist">
      <a href={href}>
        <h2>{name}</h2>
      </a>
      <p>genres: {genres.join(', ')}</p>
      <img src={images[0].url} />
    </div>
  )
}
ArtistItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  genres: PropTypes.array,
  images: PropTypes.array
};

const mapStateToProps = (store) => ({
  artists: store.artist.data
})

export const ConnectedListOfArtistItems = connect(mapStateToProps)(ListOfArtistItems)