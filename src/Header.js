import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { Search } from "@material-ui/icons";

function Header({ onClick }) {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon style={{ cursor: "pointer" }} onClick={onClick} />
        <img
          className="header__logo"
          src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
          alt=""
        />
      </div>

      <div className="header__input">
        <input
          placeholder="Timothy's youtube clone"
          style={{ fontSize: "15px" }}
          type="text"
        />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__right">
        <SearchIcon className="header__icon header__searchIcon" />
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          className="header__icon"
          alt="Tim"
          src="https://e7.pngegg.com/pngimages/194/608/png-clipart-cristiano-ronaldo-holding-soccer-ball-cristiano-ronaldo-fifa-18-fifa-17-fifa-16-real-madrid-c-f-fifa-tshirt-blue-thumbnail.png"
        />
      </div>
    </div>
  );
}

export default Header;
