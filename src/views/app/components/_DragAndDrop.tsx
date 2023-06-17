import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy as vertical } from '@dnd-kit/sortable'
import { userStore} from '../../../shared/utils/listStore'

export function DragAndDrop({children}:{children:React.ReactNode}) {
  const { elements } = userStore()
  const handleDragEnd = () => {return}

  return (
    <div>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={elements}
          strategy={vertical}
        >
          {children}
        </SortableContext>
      </DndContext>
    </div>
  )
}
