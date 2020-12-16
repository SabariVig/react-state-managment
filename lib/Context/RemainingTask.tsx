import { selector } from 'recoil'
import TaskStore from './Task'
import TasksStore from './Tasks'

const remaningTasks = selector({
  key: 'remaningTasks',
  get: ({ get }) => {
    const tasksID = get(TasksStore)
    console.log(tasksID)
    const tasks = tasksID.map((task) => {
      return get(TaskStore(task))
    })
    console.log(tasks)
    return tasks.filter((task) => !task.completed).length
  },
})

const completedTasks = selector({
  key: 'completedTasks',
  get: ({ get }) => {
    const tasksID = get(TasksStore)
    const tasks = tasksID.map((task) => {
      return get(TaskStore(task))
    })
    return tasks.filter((task) => task.completed).length
  },
})

export { completedTasks }

export default remaningTasks
