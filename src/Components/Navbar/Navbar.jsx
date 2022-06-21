import React, { memo } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import MenuData from "./MenuData";
import SearchBar from "./SearchBar";
import BadgeIcon from "./BadgeIcon";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
const Navbar = () => {
  return (
    <div className="nav_container">
      <img src={logo} alt="logo" />
      <div className="nav_menu">
        <ul>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <p>{item.title}</p>
                {item.subMenu && (
                  <div className="sub_nav_menu">
                    {item.subMenu.map((subItem, subIndex) => {
                      return (
                        <div className="submenu_content" key={subIndex}>
                          <h4>{subItem.title}</h4>
                          <p>{subItem.content}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <SearchBar />
        <div className="nav_action_button">
          <BadgeIcon text="User" icon={<PersonIcon />} />
          <BadgeIcon
            text="Wishlist"
            icon={<FavoriteBorderIcon />}
            badgeCount="5"
          />
          <BadgeIcon text="Bag" icon={<ShoppingBagIcon />} badgeCount="3" />
        </div>
      </div>
    </div>
  );
};

export default memo(Navbar);
