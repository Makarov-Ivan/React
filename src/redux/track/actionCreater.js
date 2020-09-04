export const trackActionCreator = (type, value = null) => {
  return {
    type,
    payload: value
  }
}