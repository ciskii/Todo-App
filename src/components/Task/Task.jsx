import React, { useState, useEffect } from "react";
import List from "../../container/List/List";
import "./task.css";

const Task = () => {
  const [form, setForm] = useState({ topic: "", content: "" });
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((list) => [...list, form]);
  };

  return (
    <div className='task'>
      <div className='create'>
        <div className='create-header'>
          <span className='create-header-icon'>
            <i className='fas fa-edit'></i>
          </span>
          <h3 className='create-header-text'>Make New Task</h3>
        </div>
        <div className='crate-form'>
          <div className='craete-form-topic'></div>
          <div className='create-form-info'></div>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Your task topic'
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
            />
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='More info about task'
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            ></textarea>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
      <List list={list} />
    </div>
  );
};

export default Task;
