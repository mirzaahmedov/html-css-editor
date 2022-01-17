import React from "react"
import styled from "styled-components"

const Element = styled.button`
  appearance: none;
  border: none;
  outline: none;
  height: 30px;
  padding: 0px 10px;
  font-size: 1em;
  font-family: var(--font-sans);
  color: rgb(var(--text));
  background-image: linear-gradient(
    rgb(var(--background-highlight-alt)),
    rgb(var(--background-highlight))
  );
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(var(--background-dark),0.5);
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    background-image: linear-gradient(
      rgb(var(--background-highlight)),
      rgb(var(--background-highlight-alt))
    );
    box-shadow: none;
  }
  transition: transform 0.25s;
`

export default function Button(props){
  return (
    <Element {...props}>
      {props.icon && <i className={`bx bx-${props.icon}`} />}
      {props.children}
    </Element>
  )
}