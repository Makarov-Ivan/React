export const playlistActionCreator = (type, value = null) => {
  return {
    type,
    payload: value
  }
}