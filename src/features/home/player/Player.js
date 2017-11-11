import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import PropTypes from 'prop-types'
import NowPlaying from './NowPlaying'
import ControlsContainer from './ControlsContainer'
import SongList from './SongList'
import songs from '../songs'

const Player = ({ nowPlaying, setNowPlaying, songEnded }) => (
  <div>
    <NowPlaying song={nowPlaying.title} />
    <ControlsContainer file={nowPlaying.file} songEnded={songEnded} />
    <SongList songs={songs} selectSong={setNowPlaying} />
  </div>
)

Player.defaultProps = {
  nowPlaying: {
    name: undefined,
    file: undefined,
  },
}

Player.propTypes = {
  nowPlaying: PropTypes.shape({
    id: PropTypes.number,
    file: PropTypes.string,
    title: PropTypes.string,
  }),
}

const enchance = compose(
  withStateHandlers(
    {
      nowPlaying: undefined,
    },
    {
      setNowPlaying: () => value => ({
        nowPlaying: value,
      }),
      songEnded: prevState => () => {
        let nowPlaying = prevState.nowPlaying
        const i = songs.findIndex(song => song.id === nowPlaying.id) + 1
        if (i <= songs.length) {
          nowPlaying = songs[i]
        }
        return {
          ...prevState,
          nowPlaying,
        }
      },
    },
  ),
)

export default enchance(Player)
