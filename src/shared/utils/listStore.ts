import create from 'zustand';
import Task from '../interfaces/Task'

interface List {
  elements: Task[]
  setElements: (arr: Task[]) => void;
}

const getStorage = ():Task[] => {
  const item = localStorage.getItem("task-julio-todo")
  const list:Task[] = item !== null ? JSON.parse(item) : []
  return list;
}

const setStorage = (tasks:Task[]):void => {
  const item = JSON.stringify(tasks)
  localStorage.setItem("task-julio-todo",item)
}

export const listStore = create<List>((set) => ({
  elements: getStorage(),
  setElements: (arr) => {
    setStorage(arr)
    set({ elements: getStorage() })
  },
}));
