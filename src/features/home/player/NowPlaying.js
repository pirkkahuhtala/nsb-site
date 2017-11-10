import React from 'react'
import styled from 'styled-components'

const NowPlaying = styled.div`
  font-size: 1.8rem;
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

export default ({ song }) => <NowPlaying>{song}</NowPlaying>
