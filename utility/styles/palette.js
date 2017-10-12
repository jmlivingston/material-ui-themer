const materialpallette = require('material-palette')
const Colr = require('colr')

const getMaterialPalette = hex => {
  const hsl = Colr.fromHex(hex).toHslObject()
  const hslPalette = materialpallette(hsl)
  const palette = Object.keys(hslPalette).reduce((results, key) => {
    const hex = Colr.fromHslObject(hslPalette[key]).toHex()
    results[key] = hex
    return results
  }, {})
  return palette
}

const getPalette = ({
  colorPrimary,
  colorSecondary,
  basePrimary,
  baseSecondary,
  baseError,
  baseGrey,
  backgroundDefault
}) => {
  const primary = getMaterialPalette(basePrimary)
  const secondary = getMaterialPalette(baseSecondary)
  const error = getMaterialPalette(baseError)
  const grey = getMaterialPalette(baseGrey)
  return {
    primary: {
      ...primary,
      contrastDefaultColor: 'light'
    },
    secondary: {
      ...secondary,
      contrastDefaultColor: 'light'
    },
    error: {
      ...error,
      contrastDefaultColor: 'light'
    },
    grey: {
      ...grey,
      contrastDefaultColor: 'dark'
    },
    text: {
      primary: colorPrimary,
      secondary: colorSecondary
    }
  }
}

module.exports = {
  getPalette
}
