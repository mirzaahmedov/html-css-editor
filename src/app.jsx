import React from "react"
import ReactDOM from "react-dom"
import { createGlobalStyle } from "styled-components"
import Layout from "@views/Layout"

const StyleSheet = createGlobalStyle`
  :root {
    --background: 34, 34, 34;
    --background-dark: 17, 17, 17;
    --background-light: 51, 51, 51;
    --background-highlight: 68, 68, 68;
    --background-highlight-alt: 90, 90, 90;
    --text: 169, 183, 198;
    --primary: 20, 132, 255;
    --token-class: 204, 120, 50;
    --token-prop: 152, 118, 170;
    --alert: 255, 69, 58;
    --font-sans: "Be Vietnam Pro", sans-serif;
    --font-mono: "Hasklug NF", monospace;
  }
  @font-face {
    font-family: "Hasklug NF";
    src: url("/src/assets/fonts/Hasklug.otf");
  }
  ::-webkit-scrollbar {
    display: none;
  }
  *::before, *, *::after {
    box-sizing: border-box;
  }
  *::before, *::after {
    vertical-align: middle;
  }
  i.bx {
    vertical-align: middle;
  }
  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }
  *:not(textarea) {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    user-select: none;
  }
  body {
    font-size: 16px;
    font-family: var(--font-sans);
    color: rgb(var(--text));
    background-color: rgb(var(--background));
  }
  #app.blur {
    filter: blur(5px);
    pointer-events: none;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <StyleSheet />
    <Layout />
  </React.StrictMode>,
  document.getElementById("app")
)
