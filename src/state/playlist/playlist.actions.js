export const SAVE_PLAYLISTS = 'SAVE_PLAYLISTS'
export const SELECT_PLAYLIST = 'SELECT_PLAYLIST'

export function savePlaylists(playlists) {
  return {
    type: SAVE_PLAYLISTS,
    payload: playlists,
  }
}

export function selectPlaylist(id) {
  return {
    type: SELECT_PLAYLIST,
    payload: id,
  }
}