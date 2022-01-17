import React from "react"
import styled from "styled-components"

const Element = styled.input`
  display: inline;
  appearance: none;
  width: 6ch;
  min-width: 1ch;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  font-family: var(--font-mono);
  border-radius: 2px;
  color: currentColor;
  &:focus {
    outline: 1px solid rgba(var(--text), 0.5);
  }
`

export default function Textfield(props) {
  return (
    <Element
      style={{ width: `${props.value.length}ch`, color: props.color }}
      {...props}
    />
  )
}
