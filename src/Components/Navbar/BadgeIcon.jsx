import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const BadgeIcon = (props) => {
  return (
    <div className="badge_container">
      {props.badgeCount ? (
        <Badge color="secondary" badgeContent={props.badgeCount}>
          {props.icon}
        </Badge>
      ) : (
        props.icon
      )}
      <p>{props.text}</p>
    </div>
  );
};

export default BadgeIcon;
