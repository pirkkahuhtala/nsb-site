import React from 'react'
import PropTypes from 'prop-types'
import { compose, mapProps, setPropTypes, withHandlers } from 'recompose'
import styled, { keyframes } from 'styled-components'
import Song from './types'

const fadeInOut = keyframes`
  0%   { opacity:1; }
  50%  { opacity:0.6; }
  100% { opacity:1; }
`

const StyleDiv = styled.div`
  color: #ffffff;
  cursor: pointer;
  background: #000000;
  padding: 1rem;
  margin: 0.5rem;
  opacity: 0.8;
  text-transform: uppercase;
  ${props =>
    (props.selected ? `animation: ${fadeInOut} 5s infinite` : '')};
`

const SongItem = ({ number, onClick, selected, title }) => (
  <StyleDiv onClick={onClick} selected={selected}>
    {number}. {title}
  </StyleDiv>
)

SongItem.defaultProps = {
  number: undefined,
  onClick: () => {},
  selected: false,
  title: undefined,
}

SongItem.propTypes = {
  number: PropTypes.number,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  title: PropTypes.string,
}

const enchance = compose(
  setPropTypes({
    onClick: PropTypes.func,
    song: Song,
  }),
  withHandlers({
    onClick: props => event => {
      event.preventDefault()
      props.onClick(props.song)
    },
  }),
  mapProps(props => {
    const { song, ...rest } = props
    const { title } = song
    return {
      ...rest,
      title,
    }
  }),
)
export default enchance(SongItem)
