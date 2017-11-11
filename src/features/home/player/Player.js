import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import PropTypes from 'prop-types'
import NowPlaying from './NowPlaying'
import ControlsContainer from './ControlsContainer'
import SongList from './SongList'
import Song from './types'

const Player = ({ nowPlaying, setNowPlaying, songs, songEnded }) => (
  <div>
    <NowPlaying title={nowPlaying.title} />
    <ControlsContainer file={nowPlaying.file} songEnded={songEnded} />
    <SongList songs={songs} selectSong={setNowPlaying} />
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
    },
    {
      setNowPlaying: () => song => ({
        nowPlaying: song,
      }),
      songEnded: (state, props) => () => {
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
    },
  ),
)

export default enchance(Player)
