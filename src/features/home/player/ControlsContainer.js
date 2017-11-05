import React, { Component } from 'react'
import Controls from './Controls'
import weNeverStoodAChange from './novembersoundsbetter_-_Solace_in_Solitude_-_05_-_We_Never_Stood_a_Chance.mp3'

let loading = true

class ControlsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { playing: false }
  }

  onEnded = () => {
    this.setState({
      playing: false,
      loading,
    })
  }

  onPlaying = () => {
    loading = false
    this.setState({
      playing: true,
      loading,
    })
    this.audio.play()
  }

  play = () => {
    this.setState({
      loading,
    })
    this.audio.play()
  }

  pause = () => {
    this.setState({
      playing: false,
    })
    this.audio.pause()
  }

  render () {
    return (
      <div>
        <audio
          onEnded={this.onEnded}
          onPlaying={this.onPlaying}
          ref={c => {
            this.audio = c
          }}
          src={weNeverStoodAChange}
        />
        <Controls
          playing={this.state.playing}
          loading={this.state.loading}
          play={this.play}
          pause={this.pause}
        />
      </div>
    )
  }
}

export default ControlsContainer
