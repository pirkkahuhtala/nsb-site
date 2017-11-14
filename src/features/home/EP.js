import React from 'react'
import styled from 'styled-components'
import sis from './sis.jpg'

const EP = styled.div`
  background-attachment: fixed;
  background-color: #ffffff;
  background-image: url(${sis});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
  @media (max-height: 360px) {
    background-position: center 3rem;
  }
`
export default ({ ...rest }) => <EP {...rest} />
