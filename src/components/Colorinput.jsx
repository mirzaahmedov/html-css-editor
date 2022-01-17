import React from "react"
import styled from "styled-components"
import { SketchPicker } from "react-color"

const Wrap = styled.button`
  position: relative;
  appearance: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 3px;
  height: 25px;
  padding: 0px 3px;
  font-size: 1rem;
  font-family: var(--font-sans);
  color: currentColor;
  background-color: rgb(var(--background-light));
  border-radius: 5px;
  cursor: pointer;
`
const Preview = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 5px;
`
const Picker = styled.div`
  position: absolute;
  top: 150%;
  left: 0%;
  z-index: 100;
`

export default function Colorinput(props) {
  const [isPickerOpen, setIsPickerOpen] = React.useState(false)
  return (
    <Wrap onClick={() => setIsPickerOpen((state) => !state)}>
      {isPickerOpen && (
        <Picker onClick={event => event.stopPropagation()}>
          <SketchPicker
            color={props.value}
            onChangeComplete={(color) => props.onChange({ target: { name: props.name, value: color.hex }})}
          />
        </Picker>
      )}
      <Preview style={{ backgroundColor: props.value }} />
      {props.value}
    </Wrap>
  )
}
