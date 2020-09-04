import { combineReducers } from "redux";
import { albumReducer } from "./album/reducer";
import { artistReducer } from "./artist/reducer";
import { playlistReducer } from "./playlist/reducer";
import { trackReducer } from "./track/reducer";
import { tokenReducer } from "./token/reducer";

export const allReducers = combineReducers({
  album: albumReducer,
  artist: artistReducer,
  playlist: playlistReducer,
  track: trackReducer,
  token: tokenReducer
})