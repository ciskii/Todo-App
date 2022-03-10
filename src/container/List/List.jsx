import React, { useContext } from "react";
import { ListContext } from "../../Context/list-context";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "../Column/Column";
import "./list.css";

const List = () => {
  const { list, setList } = useContext(ListContext);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

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
export default List;
