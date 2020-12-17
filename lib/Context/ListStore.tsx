import create from 'zustand'
import produce from 'immer'

export type ITask = {
  label: string
  completed: boolean
}

type IuseTasks = {
  tasks: ITask[]
  addTask: (fn: any) => void
}

const useTasks = create<IuseTasks>((set) => ({
  tasks: [],
  addTask: (fn) => set(produce(fn)),
}))

export default useTasks
