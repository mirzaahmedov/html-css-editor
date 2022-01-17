import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
`
const Handle = styled.button`
  position: absolute;
  right: 50%;
  bottom: 0;
  width: 100px;
  height: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(var(--primary));
  transform: translateY(50%);
  cursor: ns-resize;
`
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background-color: rgb(255, 255, 255);
`

export default function Preview(props) {
  const [height, setHeight] = React.useState(null)
  const [isResizing, setIsResizing] = React.useState(false)

  React.useEffect(
    function () {
      function handleMouseMove(event) {
        if (!isResizing) return
        setHeight(Math.max(event.pageY, 100))
      }
      function handleMouseUp() {
        setIsResizing(false)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    },
    [isResizing]
  )

  function handleMouseDown() {
    setIsResizing(true)
  }

  return (
    <Container style={{ height }}>
      <Iframe
        srcDoc={props.src}
        style={{ pointerEvents: isResizing ? "none" : "all" }}
      />
      <Handle onMouseDown={handleMouseDown} />
    </Container>
  )
}
