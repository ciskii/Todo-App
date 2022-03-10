import { createContext } from "react";

export const ListContext = createContext({
  list: {},
  setList: () => {},
});

export const SidebarContext = createContext({
  sidebar: true,
  setSidebar: () => {},
});
