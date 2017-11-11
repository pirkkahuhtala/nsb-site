import React from 'react'
import PropTypes from 'prop-types'
import NowPlaying from './NowPlaying'
import ControlsContainer from './ControlsContainer'

const Player = ({ song }) => (
  <div>
    <NowPlaying song={song.name} />
    <ControlsContainer file={song.file} />
  </div>
)

Player.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    file: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Player
