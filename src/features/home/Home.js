import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'
import { compose, withState, lifecycle } from 'recompose'
import EP from './EP'
import Title from './Title'
import NSB from './NSB'
import Player from './player'
import Animations from './Animations'

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
      setTimeout(() => {
        self.props.setNSBVisible(true)
      }, 2000)
      setTimeout(() => {
        self.props.setTitleVisible(true)
      }, 3000)
      setTimeout(() => {
        self.props.setPlayerVisible(true)
      }, 4000)
      setTimeout(() => {
        self.props.setDownloadVisible(true)
      }, 5000)
    },
  }),
)

const EPfade = Animations.createFade(1000, { flex: '0 0 100%' })
const Fade = Animations.createFade(1000, { width: '100%' })

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
            <Player />
          </Fade>
        </EP>
      </EPfade>
    </Home>
  )),
)
