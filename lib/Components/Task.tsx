import React from 'react'
import { useRecoilState } from 'recoil'
import TaskStore from '../Context/Task'

const Task = ({ id }) => {
  const [{ label, completed }, setTask] = useRecoilState(TaskStore(id))
  return (
    <div>
      <input
        onChange={() => {
          setTask((currState) => ({
            ...currState,
            completed: !currState.completed,
          }))
        }}
        checked={completed}
        type="checkbox"
      />

      {label}
    </div>
  )
}

export default Task
