/*------------------------------------------------------------------------------
 * TailwindCSS Inter UI
 *------------------------------------------------------------------------------
 *
 * TailwindCSS Plugin to integrate with Inter UI fonts by Rasmus Andersson.
 * Includes Dynamic Metrics to calculate best leading and tracking from
 * font-size
 *
 */

// -----------------------------------------------------------------------------
// Dynamic Metrics Class
// -----------------------------------------------------------------------------

class DynamicMetrics {
  constructor() {
    this.a = -0.017;
    this.b = 0.202;
    this.c = -0.175;
  }

  tracking(fontSize) {
    return (this.a + this.b * Math.pow(Math.E, this.c * fontSize)).toPrecision(
      2
    );
  }

  leading(fontSize) {
    return (1.4 * fontSize).toPrecision(4);
  }
}

const dm = new DynamicMetrics();

// -----------------------------------------------------------------------------
// Fontface
// Fontface declaration with additional `font-display: swap`
//
// TODO: Customizable
// -----------------------------------------------------------------------------

const interUI = {
  '@font-face': [
    {
      fontFamily: 'Inter UI',
      fontStyle: 'normal',
      fontWeight: 400,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-Regular.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-Regular.woff?v=3.2") format("woff")'
    },
    {
      fontFamily: 'Inter UI',
      fontStyle: 'italic',
      fontWeight: 400,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-Italic.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-Italic.woff?v=3.2") format("woff")'
    },
    {
      fontFamily: 'Inter UI',
      fontStyle: 'normal',
      fontWeight: 500,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-Medium.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-Medium.woff?v=3.2") format("woff")'
    },
    {
      fontFamily: 'Inter UI',
      fontStyle: 'italic',
      fontWeight: 500,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-MediumItalic.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-MediumItalic.woff?v=3.2") format("woff")'
    },
    {
      fontFamily: 'Inter UI',
      fontStyle: 'normal',
      fontWeight: 600,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-SemiBold.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-SemiBold.woff?v=3.2") format("woff")'
    },
    {
      fontFamily: 'Inter UI',
      fontStyle: 'italic',
      fontWeight: 600,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-SemiBoldItalic.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-SemiBoldItalic.woff?v=3.2") format("woff")'
    },
    {
      fontFamily: 'Inter UI',
      fontStyle: 'normal',
      fontWeight: 700,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-Bold.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-Bold.woff?v=3.2") format("woff")'
    },
    {
      fontFamily: 'Inter UI',
      fontStyle: 'italic',
      fontWeight: 700,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-BoldItalic.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-BoldItalic.woff?v=3.2") format("woff")'
    },
    {
      fontFamily: 'Inter UI',
      fontStyle: 'normal',
      fontWeight: 800,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-ExtraBold.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-ExtraBold.woff?v=3.2") format("woff")'
    },
    {
      fontFamily: 'Inter UI',
      fontStyle: 'italic',
      fontWeight: 800,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-ExtraBoldItalic.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-ExtraBoldItalic.woff?v=3.2") format("woff")'
    },
    {
      fontFamily: 'Inter UI',
      fontStyle: 'normal',
      fontWeight: 900,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-Black.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-Black.woff?v=3.2") format("woff")'
    },
    {
      fontFamily: 'Inter UI',
      fontStyle: 'italic',
      fontWeight: 900,
      fontDisplay: 'swap',
      src:
        'url("https://rsms.me/inter/font-files/Inter-UI-BlackItalic.woff2?v=3.2") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-BlackItalic.woff?v=3.2") format("woff")'
    }
  ]
};

const interUIVar = {
  '@font-face': [
    {
      fontFamily: 'Inter UI var',
      fontStyle: 'oblique 0deg 10deg',
      fontWeight: '400 900',
      fontDisplay: 'swap',
      src: `url("https://rsms.me/inter/font-files/Inter-UI.var.woff2?v=3.2") format("woff2-variations"),
      url("https://rsms.me/inter/font-files/Inter-UI.var.woff2?v=3.2") format("woff2")`
    }
  ]
};

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Font Declaration
// -----------------------------------------------------------------------------

const fontDeclaration = {
  '.font-inter': {
    fontFamily: '"Inter UI", sans-serif'
  },
  '@supports(font-variation-settings:normal)': {
    '.font-inter': {
      fontFamily: '"Inter UI var", sans-serif'
    }
  }
};

// -----------------------------------------------------------------------------

module.exports = function(textSizes) {
  return function({ addComponents, addUtilities, config }) {
    const newTextSizes = Object.entries(textSizes).map(function(value) {
      valueToRem = parseFloat(value[1].slice(0, -3));
      return {
        [`.text-inter-${value[0]}`]: {
          fontSize: `${valueToRem}rem`,
          letterSpacing: `${dm.tracking(valueToRem)}rem`,
          lineHeight: `${dm.leading(valueToRem)}rem`
        }
      };
    });

    addUtilities([newTextSizes]);

    addComponents([interUI, interUIVar, fontDeclaration]);
  };
};
