const getTypography = ({ colorPrimary, colorSecondary, fontFamily }) => {
  return {
    fontFamily,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display4: {
      fontSize: 112,
      fontWeight: 300,
      fontFamily,
      letterSpacing: '-.04em',
      lineHeight: 1,
      color: colorSecondary
    },
    display3: {
      fontSize: 56,
      fontWeight: 400,
      fontFamily,
      letterSpacing: '-.02em',
      lineHeight: 1.35,
      color: colorSecondary
    },
    display2: {
      fontSize: 45,
      fontWeight: 400,
      fontFamily,
      lineHeight: '48px',
      color: colorSecondary
    },
    display1: {
      fontSize: 34,
      fontWeight: 400,
      fontFamily,
      lineHeight: '40px',
      color: colorSecondary
    },
    headline: {
      fontSize: 24,
      fontWeight: 400,
      fontFamily,
      lineHeight: '32px',
      color: colorPrimary
    },
    title: {
      fontSize: 21,
      fontWeight: 500,
      fontFamily,
      lineHeight: 1,
      color: colorPrimary
    },
    subheading: {
      fontSize: 16,
      fontWeight: 400,
      fontFamily,
      lineHeight: '24px',
      color: colorPrimary
    },
    body2: {
      fontSize: 14,
      fontWeight: 500,
      fontFamily,
      lineHeight: '24px',
      color: colorPrimary
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily,
      lineHeight: '20px',
      color: colorPrimary
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      fontFamily,
      lineHeight: 1,
      color: colorSecondary
    },
    button: {
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: 500,
      fontFamily
    }
  }
}

module.exports = {
  getTypography
}
