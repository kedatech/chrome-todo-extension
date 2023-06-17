import Task from '../../../shared/interfaces/Task'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function _Task({task}:{task:Task}){
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id:task.id
  })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }
  return (
    <div 
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  )
}
export default _Task