import { combineReducers, createStore } from "redux";
import { playlistReducer } from "./playlist/playlist.reducer";
import Reactotron from "../../ReactotronConfig"

const reducer = combineReducers({
  playlistReducer,
})

export const store = createStore(reducer, Reactotron.createEnhancer())