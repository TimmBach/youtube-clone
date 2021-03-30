import React from "react";
import "./FullSidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FullSidebarRow from "./FullSidebarRow";

function FullSidebar() {
  return (
    <div className="fullSidebar">
      <FullSidebarRow selected Icon={HomeIcon} title="Home" />
      <FullSidebarRow Icon={ExploreIcon} title="Explore" />
      <FullSidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <FullSidebarRow Icon={VideoLibraryIcon} title="Library" />
      <FullSidebarRow Icon={HistoryIcon} title="History" />
      <FullSidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <FullSidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <FullSidebarRow Icon={ThumbUpIcon} title="Liked Videos" />
    </div>
  );
}

export default FullSidebar;
