import React from 'react'
import Transition from 'react-transition-group/Transition'

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

const createFadeOut = (duration, style = {}) => {
  const defaultStyle = {
    ...{
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 1,
    },
    ...style,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 0 },
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

export default {
  createFade,
  createFadeOut,
}
