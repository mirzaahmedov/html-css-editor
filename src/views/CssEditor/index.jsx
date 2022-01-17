import React from "react"
import styled from "styled-components"
import Dialog from "@components/Dialog"
import Textinput from "@components/Textinput"
import Button from "@components/Button"
import ClassList from "@components/ClassList"

const Container = styled.div`
  padding: 10px;
`

function AddNewClassDialog(props) {
  const [value, setValue] = React.useState("")
  return (
    <Dialog
      title="New Class"
      isOpen={props.isOpen}
      onCancel={props.onClose}
      onSubmit={() => props.onSubmit(value)}
    >
      <Textinput
        label="Class"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </Dialog>
  )
}

export default function index(props) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const openDialog = () => setIsDialogOpen(true)
  const closeDialog = () => setIsDialogOpen(false)

  function addNewClass(name) {
    const index = props.data.findIndex((item) => item.name === name)
    if (index === -1) props.setData((state) => [...state, { name, props: {} }])
    closeDialog()
  }
  function deleteClass(name) {
    const index = props.data.findIndex((item) => item.name === name)
    if (index !== -1)
      props.setData(function (state) {
        return [...state.filter((_, i) => index !== i )]
      })
    closeDialog()
  }

  return (
    <Container>
      <Button icon="plus" onClick={openDialog}>
        Create New Class
      </Button>
      <ClassList
        data={props.data}
        setData={props.setData}
        onDelete={deleteClass}
      />
      <AddNewClassDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onSubmit={addNewClass}
      />
    </Container>
  )
}
