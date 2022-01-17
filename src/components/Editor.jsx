import React from "react"
import prism from "prismjs"
import styled from "styled-components"
import autoclose from "@utils/autoclose"

import "@assets/styles/editor.css"

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const Pre = styled.pre`
  height: 100%;
  margin: 0px !important;
  font-size: 20px !important;
  line-height: 30px !important;
  tab-size: 4 !important;
`
const Code = styled.code`
  font-family: var(--font-mono) !important;
  white-space: pre-wrap !important;
`
const TextArea = styled.textarea`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 1em;
  font-size: 20px;
  line-height: 30px;
  font-family: var(--font-mono);
  tab-size: 4;
  border: none;
  color: rgb(var(--text));
  -webkit-text-fill-color: transparent;
  background: none;
  outline: none;
  word-spacing: normal;
  word-break: normal;
`

export default function Editor(props) {

  React.useEffect(
    function () {
      prism.highlightAll()
    },
    [props.data]
  )

  function handleChange(event) {
    props.setData(event.target.value)
  }

  return (
    <Container>
      <TextArea
        value={props.data}
        onInput={autoclose}
        onChange={handleChange}
        spellCheck="false"
      />
      <Pre>
        <Code className="language-html">{props.data}</Code>
      </Pre>
    </Container>
  )
}
