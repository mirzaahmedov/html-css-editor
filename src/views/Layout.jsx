import React from "react"
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SideBar from "@components/SideBar"
import Preview from "@components/Preview"
import HtmlEditor from "@views/HtmlEditor"
import CssEditor from "@views/CssEditor"

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`
const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const data = [
  {
    name: "text-field",
    props: {
      "white-space": { type: "text", value: "normal" },
      "color": { type: "color", value: "#222" },
      "padding": { type: "numeric", value: "1px" },
      "appearance": { type: "text", value: "none" },
      "font-face": { type: "text", value: "sans-serif" },
    },
  },
  {
    name: "heading",
    props: {
      "white-space": { type: "text", value: "nowrap" },
      "font-size": { type: "numeric", value: "32px" },
      "margin-bottom": { type: "numeric", value: "10px" },
      "font-family": { type: "text", value: "monospace" },
      "color": { type: "color", value: "#ff0000" },
    },
  },
]

export default function Layout() {
  const [html, setHtml] = React.useState("")
  const [css, setCss] = React.useState(data)
  const [cssText, setCssText] = React.useState("")
  const [src, setSrc] = React.useState("")

  React.useEffect(function(){

    function getAllClasses(css){
      return  css.map(getClass).join("")
    }
    function getClass(classObj){
      return `.${classObj.name}{${getProps(classObj.props)}}`
    }
    function getProps(props){
      const getProp = prop => {
        return `${prop}:${props[prop].value};`
      }
      return Object.keys(props).map(getProp).join("")
    }
    
    setCssText(getAllClasses(css))

  },[css])
  React.useEffect(
    function () {
      setSrc(`<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Component Preview</title>
                <style>${cssText}</style>
              </head>
              <body>
                ${html}
              </body>
            </html>`)
    },
    [html,cssText]
  )

  return (
    <BrowserRouter>
      <Content>
        <SideBar />
        <Main>
          <Preview src={src} />
          <Routes>
            <Route
              path="/"
              element={<HtmlEditor data={html} setData={setHtml} />}
            />
            <Route
              path="/css"
              element={<CssEditor data={css} setData={setCss} />}
            />
          </Routes>
        </Main>
      </Content>
    </BrowserRouter>
  )
}
