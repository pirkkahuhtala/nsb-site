import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Audio extends Component {
  componentWillReceiveProps ({ operation }) {
    if (this.props.operation !== operation) {
      switch (operation) {
        case 'play':
          this.audio.play()
          break
        default:
          this.audio.pause()
      }
    }
  }

  render () {
    return (
      // eslint-disable-next-line
      <audio
        ref={c => {
          this.audio = c
        }}
        onEnded={this.props.onEnded}
        onPlaying={this.props.onPlaying}
        src={this.props.file}
      />
    )
  }
}

Audio.defaultProps = {
  file: undefined,
  operation: undefined,
  onEnded: PropTypes.func,
  onPlaying: PropTypes.func,
}

Audio.propTypes = {
  file: PropTypes.string,
  operation: PropTypes.string,
  onEnded: PropTypes.func,
  onPlaying: PropTypes.func,
}

export default Audio
