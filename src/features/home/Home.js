import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'
import Transition from 'react-transition-group/Transition'
import { compose, withState, lifecycle } from 'recompose'
import EP from './EP'
import Title from './Title'
import NSB from './NSB'
import Player from './player'
import songs from './songs'

const createFade = (duration, style = {}) => {
  const defaultStyle = {
    ...{
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    },
    ...style,
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  }
  return ({ inProp, children }) => (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

const Home = styled.div`display: flex;`

const enhance = compose(
  withState('backgroundVisible', 'setBackgroundVisible', false),
  withState('titleVisible', 'setTitleVisible', false),
  withState('nsbVisible', 'setNSBVisible', false),
  withState('playerVisible', 'setPlayerVisible', false),
  withState('downloadVisible', 'setDownloadVisible', false),
  lifecycle({
    componentDidMount () {
      const self = this
      self.props.setBackgroundVisible(true)
      setInterval(() => {
        self.props.setNSBVisible(true)
      }, 2000)
      setInterval(() => {
        self.props.setTitleVisible(true)
      }, 3000)
      setInterval(() => {
        self.props.setPlayerVisible(true)
      }, 4000)
      setInterval(() => {
        self.props.setDownloadVisible(true)
      }, 5000)
    },
  }),
)

const EPfade = createFade(1000, { flex: '0 0 100%' })
const Fade = createFade(1000)

export default getSiteProps(
  enhance(({ backgroundVisible, nsbVisible, titleVisible, playerVisible }) => (
    <Home>
      <EPfade inProp={backgroundVisible}>
        <EP>
          <Fade inProp={nsbVisible}>
            <NSB />
          </Fade>
          <Fade inProp={titleVisible}>
            <Title />
          </Fade>
          <Fade inProp={playerVisible}>
            <Player song={songs[4]} />
          </Fade>
        </EP>
      </EPfade>
    </Home>
  )),
)
