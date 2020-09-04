import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ListOfPlaylistItems = ({ playlists }) => {
  return (
    playlists.map(el => PlaylistItem(el))
  )
}
const PlaylistItem = ({ name, href, images, owner, tracks }) => {
  return (
    <div className="playlistItem">
      <a href={href}>
        <p>{name}</p>
      </a>
      <images src={images[0].url} />
      <p>Owner: {owner.display_name}</p>
      <p>Count: {tracks.total}</p>
    </div>
  )
}
PlaylistItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  images: PropTypes.array,
  owner: PropTypes.object,
  tracks: PropTypes.object,
}

const mapStateToProps = (store) => ({
  playlists: store.playlist.data
})

export const ConnectedListOfPlaylistItems = connect(mapStateToProps)(ListOfPlaylistItems)
