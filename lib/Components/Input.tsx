import React, { useState } from 'react'
import styled from 'styled-components'
import useTasks, { ITask } from '../Context/ListStore'

const Input = () => {
  const addTask = useTasks((state) => state.addTask)

  const [label, setLabel] = useState('')
  return (
    <div>
      <InputStyle
        onChange={(e) => {
          setLabel(e.target.value)
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            setLabel('')
            addTask((state: { tasks: ITask[] }) => {
              state.tasks = [...state.tasks, { label, completed: false }]
            })
          }
        }}
        value={label}
        type="text"
      />
    </div>
  )
}

const InputStyle = styled.input`
  color: ${({ theme }) => theme.global.text};
  border: none;
  background: grey;
`

export default Input
