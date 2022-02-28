import React, { useState, useEffect, useContext } from "react";
import { ListContext } from "../../Context/list-context";
import "./form.css";

const Form = () => {
  const [form, setForm] = useState({ topic: "", content: "" });

  const { list, setList } = useContext(ListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((list) => [...list, form]);
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
            onChange={(e) => setForm({ ...form, content: e.target.value })}
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
