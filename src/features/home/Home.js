import React from 'react'
import { getSiteProps } from 'react-static'
import styled from 'styled-components'
import Transition from 'react-transition-group/Transition'
import { compose, withState, lifecycle } from 'recompose'
import EP from './EP'
import Title from './Title'
import NSB from './NSB'

const createFade = duration => {
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
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

const Home = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;
`

const enhance = compose(
  withState('isLoading', 'setLoading', true),
  lifecycle({
    componentDidMount () {
      this.props.setLoading(false)
    },
  }),
)

const EPfade = createFade(1000)
const Titlefade = createFade(1800)
const NSBfade = createFade(2300)

export default getSiteProps(
  enhance(({ isLoading }) => (
    <Home>
      <EPfade inProp={!isLoading}>
        <EP />
      </EPfade>
      <Titlefade inProp={!isLoading}>
        <Title />
      </Titlefade>
      <NSBfade inProp={!isLoading}>
        <NSB />
      </NSBfade>
    </Home>
  )),
)
