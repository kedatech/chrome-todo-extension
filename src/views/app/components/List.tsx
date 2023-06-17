import { DndContext, closestCenter } from '@dnd-kit/core'
export function List() {

  const handleDragEnd = () => {return}

  return (
    <div>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >

      </DndContext>
    </div>
  )
}
