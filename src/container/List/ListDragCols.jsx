import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "../../Context/list-context";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "../../Context/initialData";
import Column from "../Column/Column";
import "./list-drag.css";
import { click } from "@testing-library/user-event/dist/click";

const ListDrag = () => {
  const { list, setList } = useContext(ListContext);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    console.log("destinaton", destination);
    console.log("source", source);
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const columnSrc = list.columns[source.droppableId];
      const newTaskSrc = Array.from(columnSrc.taskIds);

      newTaskSrc.splice(source.index, 1);
      newTaskSrc.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...columnSrc,
        taskIds: newTaskSrc,
      };

      const newState = {
        ...list,
        columns: {
          ...list.columns,
          [newColumn.id]: newColumn,
        },
      };
      setList(newState);
    }

    if (source.droppableId !== destination.droppableId) {
      const colSrc = list.columns[source.droppableId];
      const colDest = list.columns[destination.droppableId];

      const newTaskSrc = Array.from(colSrc.taskIds);
      const newTaskDest = Array.from(colDest.taskIds);

      newTaskSrc.splice(source.index, 1);
      newTaskDest.splice(destination.index, 0, draggableId);

      const newColSrc = {
        ...colSrc,
        taskIds: newTaskSrc,
      };
      const newColDest = {
        ...colDest,
        taskIds: newTaskDest,
      };

      const newState = {
        ...list,
        columns: {
          ...list.columns,
          [newColSrc.id]: newColSrc,
          [newColDest.id]: newColDest,
        },
      };

      setList(newState);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='list-container'>
        {list.columnOrder.map((columnId) => {
          const column = list.columns[columnId];
          const tasks = column.taskIds.map((taskId) => list.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </DragDropContext>
  );
};
export default ListDrag;
