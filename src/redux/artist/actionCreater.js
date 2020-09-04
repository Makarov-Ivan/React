export const artistActionCreator = (type, value = null) => {
  return {
    type,
    payload: value
  }
}