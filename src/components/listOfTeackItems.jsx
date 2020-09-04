import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ListOfTeackItems = ({ traks }) => {
  // console.log('traks: ', traks);
  return (
    traks.map(el => TrackItem(el))
  )
}
const TrackItem = ({ name, href, duration_ms, popularity, album: { name: albumName, href: albumLink }, artists }) => {
  return (
    <div className="trakItem">
      <p>name:
        <a href={href}>
          {name}
        </a>
      </p>
      <p>duration: {Math.round(duration_ms / 1000 / 60)} min</p>
      <p>popularity: {popularity}</p>
      <p>album name:
        <a href={albumLink}>
          {albumName}
        </a>
      </p>
      <p>artists name:
        <a href={artists[0].href}>
          {artists[0].name}
        </a>
      </p>
      <hr />
    </div>
  )
}
TrackItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  duration_ms: PropTypes.number,
  popularity: PropTypes.number,
  albumName: PropTypes.string,
  albumLink: PropTypes.string,
  artists: PropTypes.object,
}

const mapStateToProps = (store) => ({
  traks: store.track.data
})

export const ConnectedListOfTeackItems = connect(mapStateToProps)(ListOfTeackItems)