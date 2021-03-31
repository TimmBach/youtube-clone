import React from "react";
import "./VideoRow.css";
import VerifiedIcon from "@material-ui/icons/CheckCircle";
import { Avatar } from "@material-ui/core";

function VideoRow({
  image,
  title,
  channel,
  subs,
  views,
  verified,
  timestamp,
  description,
  channelImage,
}) {
  return (
    <div className="videoRow">
      <div className="videoRow__image">
        <img src={image} alt="" />
      </div>

      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videRow__info">
          {views} views • {timestamp}
        </p>
        <div className="videoRow__channelName">
          <Avatar
            className="videoCard__avatar"
            src={channelImage}
            alt={channel}
          />
          <p>
            {channel}
            {verified && (
              <VerifiedIcon style={{ fontSize: "14px", marginLeft: "2px" }} />
            )}{" "}
          </p>
        </div>

        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
