import React, { memo } from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <div className="search_container">
      <SearchIcon />
      <input placeholder="Search for Product" />
    </div>
  );
};

export default memo(SearchBar);
