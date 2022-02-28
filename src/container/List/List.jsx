import React, { useContext } from "react";
import { ListContext } from "../../Context/list-context";
import "./list.css";

const List = () => {
  const { list } = useContext(ListContext);

  const items = list.map((item, index) => (
    <div className='list-item' key={index}>
      <p className='list-item-text list-item-content'>{item.content}</p>
      <p className='list-item-text list-item-topic'>Task</p>
    </div>
  ));

  return <div className='list'>{items}</div>;
};

export default List;
