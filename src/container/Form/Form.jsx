import React, { useState, useEffect, useContext } from "react";
import { ListContext } from "../../Context/list-context";
import "./form.css";

const Form = () => {
  const [form, setForm] = useState({ content: "" });
  const { list, setList } = useContext(ListContext);

  // Add new Task
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTaskId = "task-" + (list.lastId + 1);
    const col = list.columns["column-1"];
    const newTaskIds = [...list.columns["column-1"].taskIds, newTaskId];

    // Add new task in list.tasks
    list.tasks[newTaskId] = {
      id: newTaskId,
      content: form.content,
    };

    // Add new Task id in list.columns["column-1"].taskIds
    list.columns["column-1"].taskIds = newTaskIds;

    // Increase size of tasks and task id
    const newList = {
      ...list,
      size: list.size + 1,
      lastId: list.lastId + 1,
    };

    setList(newList);
    setForm({ content: "" });
  };

  return (
    <div className='form'>
      <form className='form-content' id='form-content' onSubmit={handleSubmit}>
        <div className='form-items'>
          <input
            className='form-input'
            type='text'
            placeholder='Add a task'
            value={form.content}
            onChange={(e) => setForm({ content: e.target.value })}
          />
        </div>
      </form>
      <div className='form-footer'>
        <div className='form-footer-icons' id='form-footer-icons'>
          <div className='form-footer-icon form-footer-icon-due '>
            <i className='far fa-calendar-alt'></i>
          </div>
          <div className='form-footer-icon form-footer-icon-remind'>
            <i className='far fa-bell'></i>
          </div>
          <div className='form-footer-icon form-footer-icon-repeat'>
            <i className='fas fa-redo'></i>
          </div>
        </div>
        <button
          className='form-footer-button'
          form='form-content'
          type='submit'
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;
