import React, { useContext } from "react";
import "./task.css";
import { Draggable } from "react-beautiful-dnd";
import { ListContext } from "../../Context/list-context";

const Task = (props) => {
  const { list, setList } = useContext(ListContext);

  const handleMenu = (e) => {
    e.preventDefault();

    // *****this is onchange-checlist branch****
    // taskDel - task index to delete
    const taskDel = list.columns[props.colId].taskIds.indexOf(props.task.id);

    delete list.tasks[props.task.id];

    const newCol = list.columns[props.colId].taskIds;
    newCol.splice(taskDel, 1);

    const newList = {
      ...list,
      columns: {
        ...list.columns,
        [props.colId]: {
          ...list.columns[props.colId],
          taskIds: newCol,
        },
      },
      tasks: list.tasks,
      size: list.size - 1,
    };
    setList(newList);
  };
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <div
          className='task-container'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onContextMenu={handleMenu}
        >
          <h2>{props.task.id}</h2>
          {props.task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
