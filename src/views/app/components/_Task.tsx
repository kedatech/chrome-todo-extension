import Task from '../../../shared/interfaces/Task'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import css from './styles/_Task.module.scss'
import { TiInputChecked, TiEdit, TiDelete} from "react-icons/ti";

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
      className={`${css.task}`}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div className={css.info}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </div>

      <div className={css.btns}>
        <button> <TiInputChecked /> </button>
        <button> <TiEdit /> </button>
        <button> <TiDelete /> </button>
      </div>
    </div>
  )
}
export default _Task