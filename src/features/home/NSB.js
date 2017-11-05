import React from 'react'
import styled from 'styled-components'

const NSB = styled.div`
  color: #000000;
  font-size: 2rem;
  margin-top: 5rem;
  text-transform: uppercase;
  @media (max-width: 960px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px)  {
    font-size: 1.2rem;
  }
  @media (max-width: 360px) {
    font-size: 1rem;
  }
  @media (max-width: 1480px), (max-height: 500px) {
    margin-top: 1.5rem;
  }
`

export default () => <NSB>Novembersoundsbetter</NSB>
