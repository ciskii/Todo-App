import React, { useContext } from "react";
import { SidebarContext } from "../../Context/list-context";
import { DragDropContext } from "react-beautiful-dnd";
import "./sidebar.css";

const Sidebar = () => {
  const { sidebar } = useContext(SidebarContext);
  return (
    <div className={sidebar ? "side" : "no-side"}>
      <ul className='side-ul'>
        <li className='side-li'>
          <i className='fas fa-inbox' style={{ color: "lightskyblue" }}></i>
          <p>Inbox</p>
        </li>
        <li className='side-li'>
          <i
            className='fas fa-calendar-day'
            style={{ color: "lightgreen" }}
          ></i>
          <p>Today</p>
        </li>
        <li className='side-li'>
          <i className='far fa-calendar-alt' style={{ color: "lightpink" }}></i>
          <p>Upcoming</p>
        </li>
        <li className='side-li'>
          <i className='fas fa-filter' style={{ color: "lightsalmon" }}></i>
          <p>Filter & Labels</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
