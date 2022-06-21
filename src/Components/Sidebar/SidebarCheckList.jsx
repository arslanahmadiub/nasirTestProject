import React from "react";

import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

const SidebarCheckList = (props) => {
  return (
    <div className="checkbox_container">
      <Checkbox
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      />
      <h5>{props.data.label}</h5>
      {props.data.value && <p>({props.data.value})</p>}
    </div>
  );
};

export default SidebarCheckList;
