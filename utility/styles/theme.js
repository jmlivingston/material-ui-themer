const getPalette = require('./palette').getPalette
const getTypography = require('./typography').getTypography
const defaultTheme = require('./defaultTheme')

const getTheme = ({
  paletteType,
  colorPrimary,
  colorSecondary,
  basePrimary,
  baseSecondary,
  baseError,
  baseGrey,
  backgroundDefault,
  fontFamily
}) => {
  const palette = getPalette({
    colorPrimary,
    colorSecondary,
    basePrimary,
    baseSecondary,
    baseError,
    baseGrey,
    backgroundDefault
  })
  const typography = getTypography({ colorPrimary, colorSecondary, fontFamily })
  return {
    ...defaultTheme,
    palette: {
      ...defaultTheme.palette,
      ...palette,
      text: {
        ...defaultTheme.palette.text,
        primary: palette.text.primary,
        secondary: palette.text.secondary
      },
      type: paletteType,
      background: {
        ...defaultTheme.palette.background,
        default: backgroundDefault
      }
    },
    typography: {
      ...defaultTheme.typography,
      ...typography
    }
  }
}

module.exports = {
  getTheme
}