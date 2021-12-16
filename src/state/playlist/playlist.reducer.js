import { SAVE_PLAYLISTS, SELECT_PLAYLIST } from "./playlist.actions";

const initialState = {
  playlists: [],
  selectedPlaylist: null,
}

export function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload
      }
    case SELECT_PLAYLIST:
      const selectedPlaylist = state.playlists.find(playlist => playlist.id === action.payload)
      return {
        ...state,
        selectedPlaylist,
      }
    default:
      return state
  }
}