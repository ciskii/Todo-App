import React from "react";
import Task from "../Task/Task.jsx";
import { Droppable } from "react-beautiful-dnd";
import "./column.css";

const Column = (props) => {
  return (
    <div className='col'>
      {/* <div className='title'>
        <h3>{props.column.title}</h3>
      </div> */}
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div
            className='tasklist'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                colId={props.column.id}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
