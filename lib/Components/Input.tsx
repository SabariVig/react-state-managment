import React, { useState } from 'react'
import { useRecoilCallback, useRecoilState } from 'recoil'
import styled from 'styled-components'
import TaskStore from '../Context/Task'
import TasksStore from '../Context/Tasks'

const Input = () => {
  const [label, setLabel] = useState('')
  const [tasks, setTasks] = useRecoilState(TasksStore)
  const inputTasks = useRecoilCallback(({ set }) => {
    return (label: string) => {
      const newTaskID = tasks.length
      set(TasksStore, [...tasks, newTaskID])
      set(TaskStore(newTaskID), {
        label,
        completed: false,
      })
    }
  })
  return (
    <div>
      <InputStyle
        onChange={(e) => {
          setLabel(e.target.value)
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            inputTasks(label)
            setLabel('')
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
