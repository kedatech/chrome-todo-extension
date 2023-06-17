import { DragAndDrop } from './_DragAndDrop'
import { userStore } from '../../../shared/utils/listStore'
import Task from './_Task'
export function List() {

  const { elements } = userStore()

  return (
    <div>
      <DragAndDrop>
        {
          elements.map( el =>(
            <Task task={el} key={el.id}/>
          ))
        }
      </DragAndDrop>
    </div>
  )
}
