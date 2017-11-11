import React from 'react'
import styled from 'styled-components'
import { withHandlers } from 'recompose'

const SongItem = styled.div`
  color: #ffffff;
  cursor: pointer;
  background: #000000;
  padding: 1rem;
  margin: 0.5rem;
  opacity: 0.8;
  text-transform: uppercase;
`

const SongItemContainer = withHandlers({
  onClick: props => event => {
    event.preventDefault()
    props.selectSong(props.song)
  },
})(({ number, song, onClick }) => (
  <SongItem onClick={onClick} key={song.id}>
    {number}. {song.title}
  </SongItem>
))

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 25rem;
  text-align: center;
`

const SongList = ({ selectSong, songs }) => (
  <StyledDiv>
    {songs.map((song, i) => (
      <SongItemContainer
        key={song.id}
        selectSong={selectSong}
        number={i + 1}
        song={song}
      />
    ))}
  </StyledDiv>
)

export default SongList
