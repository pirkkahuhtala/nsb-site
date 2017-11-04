import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'
import Transition from 'react-transition-group/Transition'
import { compose, withState, lifecycle } from 'recompose'
import EP from './EP'
import Title from './Title'
import NSB from './NSB'

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
  lifecycle({
    componentDidMount () {
      const self = this
      self.props.setBackgroundVisible(true)
      setInterval(() => {
        self.props.setTitleVisible(true)
      }, 3000)
      setInterval(() => {
        self.props.setNSBVisible(true)
      }, 2000)
    },
  }),
)

const EPfade = createFade(1000, { flex: '0 0 100%' })
const Titlefade = createFade(1000)
const NSBfade = createFade(1000)

export default getSiteProps(
  enhance(({ backgroundVisible, nsbVisible, titleVisible }) => (
    <Home>
      <EPfade inProp={backgroundVisible}>
        <EP>
          <NSBfade inProp={nsbVisible}>
            <NSB />
          </NSBfade>
          <Titlefade inProp={titleVisible}>
            <Title />
          </Titlefade>
        </EP>
      </EPfade>
    </Home>
  )),
)
