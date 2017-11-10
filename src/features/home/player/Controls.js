import React from 'react'
import styled, { keyframes } from 'styled-components'
import Play from 'react-icons/lib/fa/play-circle'
import Pause from 'react-icons/lib/fa/pause-circle'
import Loader from 'react-icons/lib/fa/circle-o-notch'

const StyledPlay = styled(Play)`
  height: 3.5rem;
  width: 3.5rem;
  @media (max-width: 960px) {
    height: 3rem;
    width: 3rem;
  }
  @media (max-height: 600px) {
    height: 2rem;
    width: 2rem;
  }
`
const StyledPause = styled(Pause)`
  height: 3.5rem;
  width: 3.5rem;
  @media (max-width: 960px) {
    height: 3rem;
    width: 3rem;
  }
  @media (max-height: 600px) {
    height: 2rem;
    width: 2rem;
  }
`

const rotate360 = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`

const StyledLoader = styled(Loader)`
  animation: ${rotate360} 2s linear infinite;
  height: 3.5rem;
  width: 3.5rem;
  @media (max-width: 960px) {
    height: 3rem;
    width: 3rem;
  }
  @media (max-height: 600px) {
    height: 2rem;
    width: 2rem;
  }
`

const Controls = styled.div`
  margin-top: 0.1rem;
  text-align: center;
`

const Control = ({ playing, loading, play, pause }) => {
  if (loading) {
    return <StyledLoader />
  }
  if (playing) {
    return <StyledPause onClick={pause} />
  }
  return <StyledPlay onClick={play} />
}

export default props => (
  <Controls>
    <Control {...props} />
  </Controls>
)
