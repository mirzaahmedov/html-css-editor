import React from "react"
import styled from "styled-components"
import IconButton from "@components/IconButton"
import Textfield from "@components/Textfield"
import Colorinput from "@components/Colorinput"

const Container = styled.div`
  display: flex;
  gap: 5px;
  padding: 2px 0px;
  & > ${IconButton} {
    display: none;
  }
  &:hover > ${IconButton} {
    display: inline-block;
  }
`

export default function Prop(props){
  return (
    <Container>
      <Textfield color="rgb(var(--token-prop))" readOnly value={props.name} />:
      {props.data.type === "text" && <Textfield name={props.name} value={props.data.value} onChange={props.onChange} />}
      {props.data.type === "color" && <Colorinput name={props.name} value={props.data.value} onChange={props.onChange} />}
      {props.data.type === "numeric" && <Textfield name={props.name} value={props.data.value} onChange={props.onChange} />}
      ;
      <IconButton icon="trash" size={1.2} onClick={() => props.onDelete(props.name)} />
    </Container>
  )
}