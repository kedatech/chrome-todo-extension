import { DragAndDrop  } from './_DragAndDrop'
import { DragEndEvent } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import css from './styles/List.module.scss'

import { listStore } from '../../../shared/utils/store/listStore'
import { read } from '../../../shared/utils/useCrud'
import Task from './_Task'
export function List() {

  const { setElements} = listStore()

  const elements = read()
  const handleDragEnd = (e:DragEndEvent) => {

    const {active, over} = e
    const oldIndex = elements.findIndex((task)=>task.id === active.id)
    const newIndex = elements.findIndex((task)=>task.id === over?.id)

    setElements(arrayMove(elements, oldIndex, newIndex))
    return
  }
  return (
    <div className={css.list}>
      <DragAndDrop handleDragEnd={handleDragEnd}>
        {
          elements.map( el =>(
            <Task task={el} key={el.id}/>
          ))
        }
      </DragAndDrop>
    </div>
  )
}
