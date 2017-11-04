import React from 'react'
import styled from 'styled-components'
import sis from './sis.jpg'

const EP = styled.div`
  background: url(${sis});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  @media (max-height: 500px) {
    background-position: center 0rem;
  }
`
export default ({ ...rest }) => <EP {...rest} />
