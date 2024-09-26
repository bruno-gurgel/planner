import { CSSProperties } from "react";
import { DraggingStyle, NotDraggingStyle } from "@hello-pangea/dnd";

// a little function to help us with reordering the result
export function reorder<T extends { order: number }>(
  list: T[],
  startIndex: number,
  endIndex: number
) {
  const reorderedItems = Array.from(list);
  const [removed] = reorderedItems.splice(startIndex, 1);
  reorderedItems.splice(endIndex, 0, removed as T);

  const indexes = reorderedItems
    .map((item) => item.order)
    .sort((a, b) => a - b);

  const result = reorderedItems.map((item, index) => ({
    ...item,
    order: indexes[index],
  }));

  return result;
}

const grid = 8;

export function getItemStyle(
  isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined
) {
  return {
    // some basic styles to make the items look a bit nicer
    userSelect: "none" as CSSProperties["userSelect"],
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "transparent",

    // styles we need to apply on draggables
    ...draggableStyle,
  };
}

export const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "transparent",
  padding: grid,
  width: "100%",
});
