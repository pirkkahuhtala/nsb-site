import React from 'react'
import NowPlaying from './NowPlaying'
import ControlsContainer from './ControlsContainer'

const Player = () => (
  <div>
    <NowPlaying song={'We never stood a chance'} />
    <ControlsContainer />
  </div>
)

export default Player
