import React from "react";
import "./sidebar.css";
import { CategoriesData, FilterData } from "./CategoriesData";
import SidebarList from "./SidebarList";
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <SidebarList data={CategoriesData} />
      <SidebarList data={FilterData} />
    </div>
  );
};

export default Sidebar;
