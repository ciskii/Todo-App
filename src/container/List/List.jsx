import React from "react";
import "./list.css";

const List = (props) => {
  const list = props.list;

  const items = list.map((item, index) => (
    <div key={index}>
      <h1>Topic : {item.topic}</h1>
      <h3>Content: {item.content}</h3>
    </div>
  ));

  return (
    <div className='list'>
      <h1>List</h1>
      {items}
    </div>
  );
};

export default List;
