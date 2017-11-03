import React from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
//
import Routes from 'react-static-routes'

injectGlobal`
  body {
    background: #000000;
    color: #ffffff;
    font-family: 'Futura', 'Futura lt', Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

export default () => (
  <Router>
    <div>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
