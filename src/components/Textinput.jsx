import React from "react"
import styled from "styled-components"

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-family: var(--font-sans);
  margin-bottom: 5px;
`
const Element = styled.input`
  display: block;
  appearance: none;
  border: none;
  outline: none;
  height: 2em;
  margin-bottom: 10px;
  background: rgb(var(--background-dark));
  font-size: 18px;
  font-family: var(--font-mono);
  border-radius: 2px;
  color: currentColor;
  &:focus {
    outline: 2px solid rgb(var(--primary));
  }
`

export default function Textinput(props) {
  return (
    <>
      <Label>{props.label}</Label>
      <Element {...props} />
    </>
  )
}
