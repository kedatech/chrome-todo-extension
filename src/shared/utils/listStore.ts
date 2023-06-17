import create from 'zustand';
import Task from '../interfaces/Task'

interface List {
  elements: Task[]
  setElements: (arr: Task[]) => void;
}

export const userStore = create<List>((set) => ({
  elements: [
    {
      id:1,
      title:"string",
      description:"string",
      timeEnd: new Date("2023-06-17T09:00:00"),
      state:"string"
    }
  ],
  setElements: (arr) => set({ elements: arr }),
}));
