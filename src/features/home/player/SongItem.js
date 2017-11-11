import React from 'react'
import PropTypes from 'prop-types'
import { compose, mapProps, setPropTypes, withHandlers } from 'recompose'
import styled from 'styled-components'
import Song from './types'

const StyleDiv = styled.div`
  color: #ffffff;
  cursor: pointer;
  background: #000000;
  padding: 1rem;
  margin: 0.5rem;
  opacity: 0.8;
  text-transform: uppercase;
`

const SongItem = ({ number, onClick, title }) => (
  <StyleDiv onClick={onClick}>
    {number}. {title}
  </StyleDiv>
)

SongItem.defaultProps = {
  number: undefined,
  onClick: () => {},
  title: undefined,
}

SongItem.propTypes = {
  number: PropTypes.number,
  onClick: PropTypes.func,
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
