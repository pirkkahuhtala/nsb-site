import React, { Component } from 'react'
import AudioSrc from './Audio'
import Controls from './Controls'

class ControlsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = { operation: 'stop', playing: false }
  }

  componentDidUpdate (prevProps) {
    if (this.props.file && this.props.file !== prevProps.file) {
      this.play()
    }
  }

  onEnded = () => {
    this.setState({
      ...this.state,
      operation: undefined,
    })
    this.props.songEnded()
  };

  onPlaying = () => {
    this.setState({
      ...this.state,
      loading: false,
    })
  };

  play = () => {
    this.setState({
      ...this.state,
      operation: 'play',
      loading: true,
    })
  };

  pause = () => {
    this.setState({
      ...this.state,
      operation: 'pause',
    })
  };

  render () {
    return (
      <div>
        <AudioSrc
          operation={this.state.operation}
          onEnded={this.onEnded}
          onPlaying={this.onPlaying}
          file={this.props.file}
        />
        {this.props.file && (
          <Controls
            playing={!this.state.loading && this.state.operation === 'play'}
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
