import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='nav'>
      <span className='nav-icon'>
        <i className='far fa-clipboard'></i>
      </span>
      <h1 className='nav-text'>Todo App</h1>
    </div>
  );
};

export default Navbar;
