import React, { Component } from 'react'
import Controls from './Controls'

let loading = true

class ControlsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { playing: false }
  }

  componentDidUpdate (prevProps) {
    if ((this.props.file && this.props.file !== prevProps.file)) {
      this.play()
    }
  }

  onEnded = () => {
    this.setState({
      playing: false,
      loading,
    })
    this.props.songEnded()
  };

  onPlaying = () => {
    loading = false
    this.setState({
      playing: true,
      loading,
    })
    this.audio.play()
  };

  play = () => {
    this.setState({
      loading,
    })
    this.audio.play()
  };

  pause = () => {
    this.setState({
      playing: false,
    })
    this.audio.pause()
  };

  render () {
    return (
      <div>
        <audio
          onEnded={this.onEnded}
          onPlaying={this.onPlaying}
          ref={c => {
            this.audio = c
          }}
          src={this.props.file}
        />
        {this.props.file && (
          <Controls
            playing={this.state.playing}
            loading={this.state.loading}
            play={this.play}
            pause={this.pause}
          />
        )}
      </div>
    )
  }
}

export default ControlsContainer
