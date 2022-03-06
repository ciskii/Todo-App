import React from "react";
import "./task.css";
import { Draggable } from "react-beautiful-dnd";

const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <div
          className='task-container'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h2>{props.task.id}</h2>
          {props.task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
