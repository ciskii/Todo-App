import React from "react";
import "./header.css";

const Header = () => {
  const date = new Date().toDateString();
  return (
    <div className='header'>
      <div className='header-left'>
        <div className='header-left-nav'>
          <i className='fas fa-bars'></i>
        </div>
        <div className='header-left-headline-wrapper'>
          <div className='header-left-headline'>
            <h1 className='header-left-headline-text'>My Day</h1>
            <span className='header-left-headline-icon'>
              <i className='fas fa-ellipsis-h'></i>
            </span>
          </div>
          <div className='header-left-date'>
            <p>{date}</p>
          </div>
        </div>
      </div>

      <div className='header-right'>
        <div className='header-right-icon-wrapper'>
          <span className='header-icon-sort'>
            <i className='fas fa-exchange-alt'></i>
          </span>
          <p className='header-right-text'>Sort</p>
        </div>
        <div className='header-right-icon-wrapper'>
          <span className='header-icon-lightbulb'>
            <i className='far fa-lightbulb'></i>
          </span>
          <p className='header-right-text'>Suggestions</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
