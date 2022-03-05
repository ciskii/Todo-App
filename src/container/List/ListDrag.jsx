import React, { useState, useContext, useEffect } from "react";
import { ListContext } from "../../Context/list-context";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "../../Context/initialData";
import Column from "./Column";
import "./list-drag.css";

const ListDrag = () => {
  // const state = initialData;
  // const [data, setData] = useState(initialData);
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

    const column = list.columns[source.droppableId];

    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...list,
      columns: {
        ...list.columns,
        [newColumn.id]: newColumn,
      },
    };

    // console.log("newState", newState);
    setList(newState);
  };

  useEffect(() => {
    // console.log("...column", column);
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {list.columnOrder.map((columnId) => {
        const column = list.columns[columnId];
        const tasks = column.taskIds.map((taskId) => list.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};
export default ListDrag;
