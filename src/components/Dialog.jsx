import React from "react"
import Reactdom from "react-dom"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import Button from "@components/Button"

const Modal = styled(motion.div)`
  position: fixed;
  left: 50%;
  top: 50%;
  border-radius: 5px;
  background-color: rgb(var(--background-light));
  transform: translate(-50%, -50%);
`
const Header = styled.div`
  padding: 20px;
`
const Body = styled.div`
  padding: 0px 20px;
`
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 20px;
  text-align: right;
`
const Title = styled.h2`
  font-size: 1.2rem;
`

const animation = {
  initial: { opacity: 0, scale: 0.5, x: "-50%", y: "-50%" },
  animate: { opacity: 1, scale: 1, x: "-50%", y: "-50%" },
}

export default function Dialog(props) {
  React.useEffect(
    function () {
      if (props.isOpen)
        document.getElementById("app").classList.add("blur")
      else document.getElementById("app").classList.remove("blur")
    },
    [props.isOpen]
  )

  if (!props.isOpen) return null

  return Reactdom.createPortal(
    <AnimatePresence>
      {props.isOpen && (
        <Modal
          initial={animation.initial}
          animate={animation.animate}
        >
          <Header>
            <Title>{props.title}</Title>
          </Header>
          <Body>{props.children}</Body>
          <Footer>
            <Button onClick={props.onCancel}>Cancel</Button>
            <Button onClick={props.onSubmit}>Add</Button>
          </Footer>
        </Modal>
      )}
    </AnimatePresence>,
    document.getElementById("modal")
  )
}
