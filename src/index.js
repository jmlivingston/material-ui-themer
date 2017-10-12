import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import { theme } from './styles/theme'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './index.css'

let appTheme = createMuiTheme(theme)

document.getElementsByTagName('body')[0].style.backgroundColor = appTheme.palette.background.default

ReactDOM.render(
  <MuiThemeProvider theme={appTheme}>
    <App style={{ backgroundColor: appTheme.palette.background.default }} />
  </MuiThemeProvider>,
  document.getElementById('root')
)
