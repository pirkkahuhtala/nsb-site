import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  color: #000000;
  font-size: 4.5rem;
  margin-top: 1rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-top: 0.5rem;
  }
  @media (max-width: 500px)  {
    font-size: 2.2em;
    margin-top: 0.5rem;
  }
  @media (max-width: 370px)  {
    font-size: 1.5em;
  }

`

export default () => <Title>Solace in Solitude</Title>
