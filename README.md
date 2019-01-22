<h1 align="center" style="border-bottom: 0">🔠 Tailwind Inter UI</h1>
<p align="center">TailwindCSS Plugin to integrate with Inter UI Typeface from <a href="https://twitter.com/rsms">Rasmus Andersson @rsms</a>.<p>
<p align="center">
  <a href="https://github.com/imsus"><img src="https://flat.badgen.net/badge/author/@imsus/purple?icon=github" alt="author badge with @imsus written on it"></a>
</p>

## ⭐️ Features

- Auto add `@font-face` with `display: swap`
- **Dynamic Metrics** utilities based on https://rsms.me/inter/dynmetrics/

## ⬇️ Installation

- `npm install --save-dev tailwind-plugin-font-inter` OR
- `yarn add --dev tailwind-plugin-font-inter`

## ✅ Usage

1. Go to your TailwindCSS Configuration usually named `tailwind.js`
2. In your `tailwind.js` file, uncomment the line with this code `let defaultConfig = require('tailwindcss/defaultConfig')();`
3. Go to `plugins` keyword. Then add `require('@imsus/tailwind-plugin-font-inter')(defaultConfig.textSizes)` inside the array.

## 🖥 Output

This package will generate CSS on components section and utilities section.

### On `components` Section

This will add some `@font-face` declaration and adding `.font-inter` class.

```css
/* Will be generated on @tailwind components; */

@font-face {
  font-family: Inter UI;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-Regular.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-Regular.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI;
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-Italic.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-Italic.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI;
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-Medium.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-Medium.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI;
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-MediumItalic.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-MediumItalic.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI;
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-SemiBold.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-SemiBold.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI;
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-SemiBoldItalic.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-SemiBoldItalic.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI;
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-Bold.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-Bold.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI;
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-BoldItalic.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-BoldItalic.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI;
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-ExtraBold.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-ExtraBold.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI;
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-ExtraBoldItalic.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-ExtraBoldItalic.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI;
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-Black.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-Black.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI;
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI-BlackItalic.woff2?v=3.1") format("woff2"), url("https://rsms.me/inter/font-files/Inter-UI-BlackItalic.woff?v=3.1") format("woff");
}

@font-face {
  font-family: Inter UI var;
  font-style: oblique 0deg 10deg;
  font-weight: 400 900;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-UI.var.woff2?v=3.1") format("woff2-variations"), url("https://rsms.me/inter/font-files/Inter-UI.var.woff2?v=3.1") format("woff2");
}

.font-inter {
  font-family: "Inter UI", sans-serif;
}

@supports(font-variation-settings:normal) {
  .font-inter {
    font-family: "Inter UI var", sans-serif;
  }
}
```

## On `utilities` section

Replace standard `text-lg` into `text-inter-lg` to get **Dynamic Metrics** applied to your `text` class.

```css
/* Will be generated on @tailwind utilities; */

.text-inter-xs {
  font-size: .75rem;
  letter-spacing: .16rem;
  line-height: 1.05rem;
}

.text-inter-sm {
  font-size: .875rem;
  letter-spacing: .16rem;
  line-height: 1.225rem;
}

.text-inter-base {
  font-size: 1rem;
  letter-spacing: .15rem;
  line-height: 1.4rem;
}

.text-inter-lg {
  font-size: 1.125rem;
  letter-spacing: .15rem;
  line-height: 1.575rem;
}

.text-inter-xl {
  font-size: 1.25rem;
  letter-spacing: .15rem;
  line-height: 1.75rem;
}

.text-inter-2xl {
  font-size: 1.5rem;
  letter-spacing: .14rem;
  line-height: 2.1rem;
}

.text-inter-3xl {
  font-size: 1.875rem;
  letter-spacing: .13rem;
  line-height: 2.625rem;
}

.text-inter-4xl {
  font-size: 2.25rem;
  letter-spacing: .12rem;
  line-height: 3.15rem;
}

.text-inter-5xl {
  font-size: 3rem;
  letter-spacing: .1rem;
  line-height: 4.2rem;
}
```
