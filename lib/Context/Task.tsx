import { atomFamily } from 'recoil'

const TaskStore = atomFamily({
  key: 'task',
  default: {
    label: '',
    completed: false,
  },
})
export default TaskStore
