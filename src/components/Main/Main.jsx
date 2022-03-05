import React, { useState, useEffect } from "react";
import Form from "../../container/Form/Form";
import Header from "../../container/Header/Header";
import List from "../../container/List/List";
import ListDrag from "../../container/List/ListDrag";
import "./main.css";

const Main = () => {
  return (
    <div className='main'>
      <Header />
      <div className='task'>
        <Form />
        {/* <List /> */}
        <ListDrag />
      </div>
    </div>
  );
};

export default Main;
