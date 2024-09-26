"use client";

import { getItemStyle, getListStyle, reorder } from "@/lib/drag-and-drop";
import { Books } from "@prisma/client";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { updateBooksOrder } from "@/lib/actions";
import BookLine from "@/components/books/book-line";

export default function ReadingDraggable({ books }: { books: Books[] }) {
  const [items, setItems] = useState<typeof books>(books);

  function onDragEnd(result: DropResult) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const updatedItems = reorder<Books>(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(updatedItems);

    updateBooksOrder(updatedItems);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="droppable"
        isDropDisabled={false}
        isCombineEnabled={false}
        ignoreContainerClipping={false}
      >
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <BookLine key={item.id} book={item} reverse />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder as React.ReactNode}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
