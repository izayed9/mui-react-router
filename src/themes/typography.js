 function remToPx(value) {
    return Math.round(parseFloat(value) * 16)
}

console.log(remToPx(1.5))

function pxToRem(value) {
    return (`${value / 16}rem`)
}


function responsiveFontSizes({sm, md, lg}) {
    return {
        '@media (min-width:600px)': {
            fontSize: pxToRem(sm),
        },
        '@media (min-width:900px)': {
            fontSize: pxToRem(md),
          },
          '@media (min-width:1200px)': {
            fontSize: pxToRem(lg),
          },
     }
}



console.log(responsiveFontSizes({ sm: 52, md: 58, lg: 64 }))

console.log(pxToRem(24))

const FONT_PRIMARY = 'Public Sans, sans-serif'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 800,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    },
    h2: {
        fontWeight: 800,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
    },
}

export default typography
