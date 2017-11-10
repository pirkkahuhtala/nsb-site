import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  color: #000000;
  font-size: 4.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-transform: uppercase;
  @media (max-width: 960px) {
    font-size: 2.5rem;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
  }
  @media (max-width: 600px) {
    font-size: 2.2em;
  }
  @media (max-width: 360px) {
    font-size: 1.5em;
  }
  @media (max-height: 600px) {
    margin-bottom: 0.1rem;
  }
`

export default () => <Title>Solace in Solitude</Title>
