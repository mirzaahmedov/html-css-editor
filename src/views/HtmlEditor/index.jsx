import React from "react"
import styled from "styled-components"
import Editor from "@components/Editor"

const Container = styled.div`
  flex: 1;
`

export default function index(props){
  return (
    <Container>
      <Editor {...props} />
    </Container>
  )
}