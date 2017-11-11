import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import PropTypes from 'prop-types'
import NowPlaying from './NowPlaying'
import SongList from './SongList'
import Song from './types'
import Controls from './Controls'
import Audio from './Audio'

const Player = ({
  nowPlaying,
  isSongLoading,
  onEnded,
  onPlaying,
  play,
  playerOperation,
  playSelected,
  pause,
  songs,
}) => (
  <div>
    <NowPlaying title={nowPlaying.title} />
    {nowPlaying.id && <Controls
      playing={!isSongLoading && playerOperation === 'play'}
      loading={isSongLoading}
      play={play}
      pause={pause}
    />}
    <SongList songs={songs} selectSong={playSelected} />
    <Audio
      operation={playerOperation}
      onEnded={onEnded}
      onPlaying={onPlaying}
      file={nowPlaying.file}
    />
  </div>
)

Player.defaultProps = {
  nowPlaying: {},
  songs: [],
}

Player.propTypes = {
  nowPlaying: Song,
  songs: PropTypes.arrayOf(Song),
}

const enchance = compose(
  withStateHandlers(
    {
      nowPlaying: undefined,
      playerOperation: 'pause',
      isSongLoading: false,
    },
    {
      playSelected: () => song => ({
        isSongLoading: true,
        nowPlaying: song,
        playerOperation: 'play',
      }),
      onEnded: (state, props) => () => {
        const songs = props.songs
        let nowPlaying = state.nowPlaying
        const i = songs.findIndex(song => song.id === nowPlaying.id) + 1
        if (i <= songs.length) {
          nowPlaying = songs[i]
        }
        return {
          ...state,
          nowPlaying,
        }
      },
      play: () => () => ({
        playerOperation: 'play',
      }),
      pause: () => () => ({
        playerOperation: 'pause',
      }),
      onPlaying: () => () => ({
        isSongLoading: false,
      }),
    },
  ),
)

export default enchance(Player)
