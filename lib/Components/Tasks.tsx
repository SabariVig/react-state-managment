import { useRecoilValue } from 'recoil'
import TasksStore from '../Context/Tasks'
import Task from './Task'

const Tasks = () => {
  const tasks = useRecoilValue(TasksStore)
  return (
    <div>
      {tasks.map((id) => (
        <Task key={id} id={id} />
      ))}
    </div>
  )
}

export default Tasks
