import React from "react"
import styled from "styled-components"
import Class from "@components/Class"

const Container = styled.div`
  padding-top: 20px;
`

export default function ClassList(props){
  return (
    <Container>
      {props.data && props.data.map((item, index) => (
        <Class key={index} data={item} setData={props.setData} onDelete={props.onDelete} />
      ))}
    </Container>
  )
}