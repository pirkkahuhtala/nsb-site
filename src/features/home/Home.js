import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import EP from './EP'
import Title from './Title'
import NSB from './NSB'
import Player from './player'
import Animations from './Animations'

const Home = styled.div`display: flex;`

const enhance = compose(
  withStateHandlers(
    {
      backgroundVisible: false,
      titleVisible: false,
      nsbVisible: false,
      playerVisible: false,
    },
    {
      setBackgroundVisible: () => value => ({
        backgroundVisible: value,
      }),
      setTitleVisible: () => value => ({
        titleVisible: value,
      }),
      setNSBVisible: () => value => ({
        nsbVisible: value,
      }),
      setPlayerVisible: () => value => ({
        playerVisible: value,
      }),
    },
  ),
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
