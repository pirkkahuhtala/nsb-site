import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NowPlayingText = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  @media (max-width: 960px) {
    font-size: 0.8rem;
  }
  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`

const Song = styled.div`
  font-size: 1.8rem;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 960px) {
    font-size: 1.3rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (max-width: 360px) {
    font-size: 0.8rem;
  }
`

const StyledDiv = styled.div`text-align: center;`

const NowPlaying = ({ title }) => (
  <StyledDiv>
    {title && <NowPlayingText>Now playing</NowPlayingText>}
    {title && <br />}
    {title && <Song>{title}</Song>}
  </StyledDiv>
)

NowPlaying.defaultProps = {
  title: undefined,
}

NowPlaying.propTypes = {
  title: PropTypes.string,
}

export default NowPlaying
