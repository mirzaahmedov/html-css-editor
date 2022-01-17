import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import * as icons from "@assets/icons"

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 60px;
  height: 100vh;
  padding: 5px;
  background-color: rgb(var(--background-light));
`
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 1.8rem;
  border-radius: 10px;
  color: currentColor;
  &.active {
    background-color: rgb(var(--background-highlight));
  }
`

export default function SideBar(){
  return (
    <Container>
      <NavItem as="span"><icons.VsCode /></NavItem>
      <NavItem to="/"><i className="bx bxs-file-html"></i></NavItem>
      <NavItem to="/css"><i className="bx bxs-file-css"></i></NavItem>
    </Container>
  )
}