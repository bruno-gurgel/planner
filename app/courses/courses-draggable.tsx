"use client";

import CourseLine from "@/components/courses/course-line";
import { getItemStyle, getListStyle, reorder } from "@/lib/drag-and-drop";
import { Courses } from "@prisma/client";
import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { updateCoursesOrder } from "@/lib/actions";

export default function CoursesDraggable({ courses }: { courses: Courses[] }) {
  const [items, setItems] = useState<typeof courses>(courses);

  function onDragEnd(result: DropResult) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const updatedItems = reorder<Courses>(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(updatedItems);

    updateCoursesOrder(updatedItems);
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
                    <CourseLine key={item.id} course={item} reverse />
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
