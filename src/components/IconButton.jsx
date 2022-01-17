import React from "react"
import styled from "styled-components";

const Wrap = styled.button`
  flex-shrink: 0;
  appearance: none;
  border: none;
  outline: none;
  width: 1.5em;
  height: 1.5em;
  color: rgb(var(--text));
  background-color: rgb(var(--${props => props.color || "background-light"}));
  font-size: ${props => props.size || 1}rem;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.25s;
  &:active {
    transform: scale(0.8);
  }
  & > i:before {
    display: block;
  }
`

export default function(props){
  return (
    <Wrap {...props}>
      <i className={`bx bx-${props.icon}`}></i>
    </Wrap>
  )
}