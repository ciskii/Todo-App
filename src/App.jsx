import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import { ListContext, SidebarContext } from "./Context/list-context";
import initialData from "./Context/initialData";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [list, setList] = useState(initialData);
  const [sidebar, setSidebar] = useState(true);

  return (
    <ListContext.Provider value={{ list, setList }}>
      <SidebarContext.Provider value={{ sidebar, setSidebar }}>
        <Navbar />
        <div className='side-main'>
          <Sidebar />
          <Main />
        </div>
      </SidebarContext.Provider>
    </ListContext.Provider>
  );
}

export default App;
