import useTasks from '../Context/ListStore'
import Task from './Task'

const Tasks = () => {
  const tasks = useTasks((state) => state.tasks)
  console.log(tasks)
  return (
    <div>
      {tasks.map((task, i) => (
        <Task id={i} />
      ))}
      <Task id={1} />
    </div>
  )
}

export default Tasks
