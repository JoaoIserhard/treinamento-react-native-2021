import { createStore } from "redux";
import { playlistReducer } from "./playlist/playlist.reducer";

export const store = createStore(playlistReducer)