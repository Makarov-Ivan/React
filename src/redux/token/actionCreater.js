export const tokenActionCreator = (type, value = null) => {
  return {
    type,
    payload: value
  }
}