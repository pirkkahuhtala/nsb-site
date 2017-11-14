import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SongItem from './SongItem'
import Song from './types'

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 25rem;
  text-align: center;
`

const SongList = ({ nowPlaying, selectSong, songs }) => (
  <StyledDiv>
    {songs.map((song, i) => (
      <SongItem
        key={song.id}
        onClick={selectSong}
        number={i + 1}
        selected={nowPlaying.id === song.id}
        song={song}
      />
    ))}
  </StyledDiv>
)

SongList.defaultProps = {
  nowPlaying: {},
  selectSong: () => {},
  songs: [],
}

SongList.propTypes = {
  nowPlaying: Song,
  selectSong: PropTypes.func,
  songs: PropTypes.arrayOf(Song),
}

export default SongList
