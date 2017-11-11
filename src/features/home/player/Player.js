import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import PropTypes from 'prop-types'
import NowPlaying from './NowPlaying'
import ControlsContainer from './ControlsContainer'
import SongList from './SongList'

const Player = ({ nowPlaying, songs, setNowPlaying }) => (
  <div>
    <NowPlaying song={nowPlaying.title} />
    <ControlsContainer file={nowPlaying.file} />
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
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      file: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
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
    },
  ),
)

export default enchance(Player)
