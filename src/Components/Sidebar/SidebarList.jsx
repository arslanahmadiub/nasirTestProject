import React, { useState } from "react";
import SidebarCheckList from "./SidebarCheckList";
import SearchIcon from "@mui/icons-material/Search";

import CloseIcon from "@mui/icons-material/Close";
const SidebarList = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const data = props.data;
  return (
    <div className="sidebar_list_container">
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {showSearch ? (
          <InternalInput onClick={() => setShowSearch(false)} />
        ) : (
          <h4>{data.title}</h4>
        )}
        <SearchIcon
          style={{ cursor: "pointer", display: showSearch ? "none" : "flex" }}
          onClick={() => setShowSearch(true)}
        />
      </div>
      {data.data.map((item, index) => {
        return <SidebarCheckList key={index} data={item} />;
      })}
    </div>
  );
};

export default SidebarList;

const InternalInput = ({ onClick }) => {
  return (
    <div className="internal_input_container">
      <input placeholder="Search Here" />
      <CloseIcon
        style={{
          position: "absolute",
          display: "flex",
          right: "4px",
          alignItems: "center",
          top: "5px",
          cursor: "pointer",
          width: "20px",
          height: "20px",
        }}
        onClick={onClick}
      />
    </div>
  );
};
