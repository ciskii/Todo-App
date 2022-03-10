import React from "react";
import "./navbar.css";
import { useContext } from "react";
import { SidebarContext } from "../../Context/list-context";

const Navbar = () => {
  const { sidebar, setSidebar } = useContext(SidebarContext);
  return (
    <div className='nav'>
      <span className='nav-icon'>
        <i
          className='fas fa-bars'
          onClick={() => {
            sidebar ? setSidebar(false) : setSidebar(true);
          }}
        ></i>
        <i className='fas fa-home'></i>
      </span>
      <h1 className='nav-text'>To Do</h1>
    </div>
  );
};

export default Navbar;
