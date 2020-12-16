import { atom } from 'recoil'

const TasksStore = atom({
  key: 'tasks',
  default: [],
})


export default TasksStore


