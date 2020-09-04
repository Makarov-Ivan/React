export const albumActionCreator = (type, value = null) => {
  return {
    type,
    payload: value
  }
}