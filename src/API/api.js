import * as Secret from "../credentials/credentials";

const REDIRECT_URI = window.location.href.split('?')[0];

export const makeAuthURL = () => {
  return `https://accounts.spotify.com/authorize?client_id=${Secret.CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`
}

const splitSearch = () => window.location.search.split('=');

export const isCodeTokenInURL = () => splitSearch()[0] === '?code' ? true : false

export const defineCodeToken = () => splitSearch()[1];



export const requestAuthorization = () => {
  fetch(makeAuthURL(), {
    mode: 'no-cors',
    method: 'GET',
  })
    .then(res => res.json())
    .then(resJson => console.log(resJson))
    .catch(err => console.error(err))
}
