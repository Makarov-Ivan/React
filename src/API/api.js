import * as Secret from "../credentials/credentials";
import { stringify } from "qs";
const REDIRECT_URI = window.location.href.split('?')[0];

export const makeAuthURL = () => {
  return `https://accounts.spotify.com/authorize?client_id=${Secret.CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`
}

const splitSearch = () => window.location.search.split('=');

export const isCodeTokenInURL = () => splitSearch()[0] === '?code' ? true : false

export const defineCodeToken = () => splitSearch()[1];

const idAndSeret = `${Secret.CLIENT_ID}:${Secret.CLIENT_SECRET}`

export const requestAccessAndRefreshTokens = (token) => {
  console.log('fetch ', token)
  fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      "Authorization": `Basic ${btoa(idAndSeret)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: stringify(
      {
        grant_type: "authorization_code",
        code: token,
        redirect_uri: REDIRECT_URI
      }
    ),

  })
    .then(res => res.json())
    .then(resp => console.log(resp))
    .catch(err => console.error(err))




}