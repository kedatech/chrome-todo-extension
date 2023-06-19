import { listStore, setStorage } from './store/listStore'
import Task from '../interfaces/Task'

// manejar check de los Task
export const check = (task:Task):boolean => {
  const { elements} = listStore()
  const index = elements.findIndex(t => t.id === task.id);
  
  if(index>=0) {
    elements[index].check = !task.check
    return true
  }
  return false
}

// obtener todos los Task
export const read = ():Task[] => {
const { elements} = listStore()
  return elements
}

// crear nuevos
export const create = (task:Task) => {
const { elements, setElements} = listStore()
  setElements([...elements, task])
}

// actualizar
export const update = (task: Task): boolean => {
  const { elements } = listStore()
  const index = elements.findIndex(t => t.id === task.id);

  if (index >= 0) {
    // El elemento existe en el array, puedes acceder a él mediante elements[index]
    const existingTask = elements[index];
    
    // Realiza las modificaciones necesarias en existingTask
    existingTask.title = task.title;
    existingTask.description = task.description;
    existingTask.timeEnd = task.timeEnd;
    
    setStorage(elements)
    return true
  }
  return false
};

export const del = (id: number): void => {
  const { elements, setElements} = listStore()
  const newElements = elements.filter((task) => task.id !== id);
  setElements(newElements)
};
