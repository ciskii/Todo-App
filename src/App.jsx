import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { ListContext } from "./Context/list-context";

import "./App.css";

function App() {
  const [list, setList] = useState([
    { topic: "First", content: "First test TO-DO-List" },
  ]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      <Navbar />
      <Main />
    </ListContext.Provider>
  );
}

export default App;
