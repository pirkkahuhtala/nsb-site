import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import PropTypes from 'prop-types'
import NowPlaying from './NowPlaying'
import SongList from './SongList'
import Song from './types'
import Controls from './Controls'
import Audio from './Audio'
import Animations from '../Animations'

const Fade = Animations.createFade(500)
const FadeOut = Animations.createFadeOut(500)

const Player = ({
  isSongLoading,
  nowPlaying,
  onEnded,
  onPlaying,
  pause,
  play,
  playerOperation,
  playSelected,
  songs,
}) => (
  <div>
    <Fade inProp={!!nowPlaying.id}>
      <FadeOut inProp={!nowPlaying.id}>
        <NowPlaying title={nowPlaying.title} />
        {nowPlaying.id && <Controls
          playing={!isSongLoading && playerOperation === 'play'}
          loading={isSongLoading}
          play={play}
          pause={pause}
        />}
      </FadeOut>
    </Fade>
    <SongList nowPlaying={nowPlaying} songs={songs} selectSong={playSelected} />
    <Audio
      operation={playerOperation}
      onEnded={onEnded}
      onPlaying={onPlaying}
      file={nowPlaying.file}
    />
  </div>
)

Player.defaultProps = {
  nowPlaying: {},
  songs: [],
}

Player.propTypes = {
  isSongLoading: PropTypes.bool.isRequired,
  nowPlaying: Song.isRequired,
  onEnded: PropTypes.func.isRequired,
  onPlaying: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  playerOperation: PropTypes.string.isRequired,
  playSelected: PropTypes.func.isRequired,
  songs: PropTypes.arrayOf(Song),
}

const enchance = compose(
  withStateHandlers(
    {
      nowPlaying: undefined,
      playerOperation: 'pause',
      isSongLoading: false,
    },
    {
      playSelected: state => song => {
        if (state.nowPlaying === song && state.playerOperation === 'play') {
          return state.nowPlaying
        }
        return {
          isSongLoading: true,
          nowPlaying: song,
          playerOperation: 'play',
        }
      },
      onEnded: (state, props) => () => {
        const songs = props.songs
        let nowPlaying = state.nowPlaying
        const i = songs.findIndex(song => song.id === nowPlaying.id) + 1
        let playerOperation = 'play'
        if (i <= songs.length) {
          nowPlaying = songs[i]
        } else {
          playerOperation = 'pause'
          nowPlaying = {}
        }
        return {
          playerOperation,
          nowPlaying,
        }
      },
      play: () => () => ({
        playerOperation: 'play',
      }),
      pause: () => () => ({
        playerOperation: 'pause',
      }),
      onPlaying: () => () => ({
        isSongLoading: false,
      }),
    },
  ),
)

export default enchance(Player)
