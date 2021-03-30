import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MicIcon from "@material-ui/icons/Mic";
import { Avatar } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <>
      <h1
        style={{
          backgroundColor: "grey",
          textAlign: "center",
          color: "darkgrey",
        }}
      >
        Timothy's youtube-clone!{" "}
      </h1>
      <div className="header">
        <div className="header__left">
          <MenuIcon style={{ cursor: "pointer" }} />
          <img
            className="header__logo"
            src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
            alt=""
          />
        </div>

        <div className="header__input">
          <input
            placeholder="Search"
            style={{ fontSize: "15px" }}
            type="text"
          />
          <SearchIcon className="header__inputButton" />
        </div>

        <div className="header__right">
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
    </>
  );
}

export default Header;
