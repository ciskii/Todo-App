import React, { useContext } from "react";
// import "./task.css";
import "./task-onchange.css";
import { Draggable } from "react-beautiful-dnd";
import { ListContext } from "../../Context/list-context";

const Task = (props) => {
  const { list, setList } = useContext(ListContext);

  const handleMenu = (e) => {
    e.preventDefault();

    // ******This is onchange-checklist branch*******
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

  const handleCheck = () => {
    const taskDel = list.columns[props.colId].taskIds.indexOf(props.task.id);

    const newCol = list.columns[props.colId].taskIds;
    newCol.splice(taskDel, 1);

    const newDone = list.columns["column-3"].taskIds;
    newDone.splice(list.columns["column-3"].taskIds.length, 0, props.task.id);

    const newList = {
      ...list,
      columns: {
        ...list.columns,
        [props.colId]: {
          ...list.columns[props.colId],
          taskIds: newCol,
        },
        ["column-3"]: {
          ...list.columns["column-3"],
          taskIds: newDone,
        },
      },
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
          onContextMenu={handleCheck}
        >
          <h2>{props.task.id}</h2>
          <div className='checkbox-container'>
            {props.colId == "column-1" ? (
              <div>
                <input type='checkbox' onChange={handleCheck} />
                <p className='task-content'>{props.task.content}</p>
              </div>
            ) : (
              <p className='task-content'>{props.task.content}</p>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
