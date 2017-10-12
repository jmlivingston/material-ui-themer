const fs = require('fs')
const path = require('path')
const getTheme = require('./theme').getTheme

const themes = {
  dark: {
    paletteType: 'dark',
    colorPrimary: '#CCCCCC',
    colorSecondary: 'rgba(0, 0, 0, 0.54)',
    basePrimary: '#212121',
    baseSecondary: '#336699',
    baseError: '#f44336',
    baseGrey: '#9e9e9e',
    backgroundDefault: '#000000',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  default: {
    paletteType: 'light',
    colorPrimary: 'rgba(0, 0, 0, 0.87)',
    colorSecondary: 'rgba(0, 0, 0, 0.54)',
    basePrimary: '#2196f3',
    baseSecondary: '#e91e63',
    baseError: '#f44336',
    baseGrey: '#9e9e9e',
    backgroundDefault: '#fafafa',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  light: {
    paletteType: 'light',
    colorPrimary: 'rgba(0, 0, 0, 0.87)',
    colorSecondary: 'rgba(0, 0, 0, 0.54)',
    basePrimary: '#2196f3',
    baseSecondary: '#e91e63',
    baseError: '#f44336',
    baseGrey: '#9e9e9e',
    backgroundDefault: '#fafafa',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  }
}

const theme = getTheme(themes.default)
const themeJson = 'export const theme = ' + JSON.stringify(theme, null, 2)
const themePath = path.join(__dirname, '../../src', 'styles', 'theme.js')
fs.writeFile(themePath, themeJson, error => {
  error && console.log('Error: ' + error)
})
