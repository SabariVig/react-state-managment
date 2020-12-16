import React from 'react'

const Task = ({ id }) => {
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
