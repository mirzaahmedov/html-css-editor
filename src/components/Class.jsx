import React from "react"
import styled from "styled-components"
import Dialog from "@components/Dialog"
import Textinput from "@components/Textinput"
import Prop from "@components/Prop"
import IconButton from "@components/IconButton"

const Container = styled.details`
  font-family: var(--font-mono);
  padding-bottom: 5px;
`
const ClassName = styled.summary`
  font-size: 18px;
  color: rgb(var(--token-class));
  cursor: pointer;
  & > button {
    display: none;
    margin-left: 10px;
  }
  &:hover > button {
    display: inline-block;
  }
`
const Props = styled.div`
  padding-left: 40px;
`

function AddNewPropDialog(props) {
  const [value, setValue] = React.useState({ type: "", name: "" })

  const updateField = event => {
    const { name, value } = event.target
    setValue(function(state){
      return { ...state, [name]: value }
    })
  }

  return (
    <Dialog
      title="New Property"
      isOpen={props.isOpen}
      onCancel={props.onClose}
      onSubmit={() => props.onSubmit(value)}
    >
      <Textinput label="name" name="name" value={value.name} onChange={updateField} />
      <Textinput label="type" name="type" value={value.type} onChange={updateField} />
    </Dialog>
  )
}

export default function Class(props) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  const openDialog = () => setIsDialogOpen(true)
  const closeDialog = () => setIsDialogOpen(false)

  function updateProperty(event) {
    const { value, name } = event.target
    props.setData(function (state) {
      const index = state.findIndex((item) => item.name === props.data.name)
      if (index !== -1) {
        state[index].props[name].value = value
        return [...state]
      }
      return state
    })
  }
  function deleteProperty(name) {
    props.setData(function (state) {
      const index = state.findIndex((item) => item.name === props.data.name)
      if (index !== -1) {
        delete state[index].props[name]
        return [...state]
      }
      return state
    })
  }
  function addProperty(value) {
    props.setData(function (state) {
      const index = state.findIndex((item) => item.name === props.data.name)
      if (index !== -1 && !(value.name in state[index].props)) {
        const defaultValue = value.type === "color" ? "#000000" : "initial"
        state[index].props[value.name] = { value: defaultValue, type: value.type }
        return [...state]
      }
      return state
    })
    closeDialog()
  }

  return (
    <Container>
      <ClassName>
        .{props.data.name}
        <IconButton size={1.2} icon="plus" onClick={openDialog} />
        <IconButton size={1.2} icon="trash" onClick={() => props.onDelete(props.data.name)} />
      </ClassName>
      <Props>
        {Object.keys(props.data.props).map((prop, index) => (
          <Prop
            key={index}
            name={prop}
            data={props.data.props[prop]}
            onChange={updateProperty}
            onDelete={deleteProperty}
          />
        ))}
      </Props>
      <AddNewPropDialog isOpen={isDialogOpen} onCancel={closeDialog} onSubmit={addProperty} />
    </Container>
  )
}
