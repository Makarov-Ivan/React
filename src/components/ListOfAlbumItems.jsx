import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ListOfAlbumItems.scss'

const ListOfAlbumItems = ({ albums }) => {
  return (
    <React.Fragment>

      <h3>list of albums</h3>
      <div className='listOfAlbums'>
        {albums ? albums.map(el => {
          return (
            <React.Fragment key={el.uri}>

              {AlbumItem(el)}
            </React.Fragment>
          )
        }) : ''}
      </div>
    </React.Fragment>
  )
}
const AlbumItem = ({ name, href, images, release_date, total_tracks, artists }) => {
  return (
    <div className="albumItem">
      <div className="picture">
        <img src={images[0].url} width='320' height='320' />
      </div>
      <div className="name">
        <a href={href}>
          <p>{name}</p>
        </a>
      </div>
      <div className="date">
        <p>date: {release_date}</p>
      </div>
      <div className="totalTracks">
        <p>total tracks: {total_tracks}</p>
      </div>
      <div className="artist">
        <p>Artists: {artists[0].name}</p>
      </div>
    </div>
  )
}
AlbumItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  images: PropTypes.array,
  release_date: PropTypes.string,
  total_tracks: PropTypes.string,
  artists: PropTypes.array,
}

const mapStateToProps = (store) => ({
  albums: store.album.data
})

export const ConnectedListOfAlbumItem = connect(mapStateToProps)(ListOfAlbumItems)