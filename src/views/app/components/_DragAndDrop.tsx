import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy as vertical } from '@dnd-kit/sortable'
import { listStore } from '../../../shared/utils/store/listStore'

export function DragAndDrop({children, handleDragEnd}:{children:React.ReactNode, handleDragEnd:(event: DragEndEvent) => void  }) {
  const { elements } = listStore()

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
