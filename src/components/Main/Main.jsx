import React, { useState, useEffect } from "react";
import Form from "../../container/Form/Form";
import Header from "../../container/Header/Header";
import List from "../../container/List/List";
import "./main.css";

const Main = () => {
  return (
    <div className='main'>
      <Header />
      <div className='main-list'>
        <Form />
        <List />
      </div>
    </div>
  );
};

export default Main;
