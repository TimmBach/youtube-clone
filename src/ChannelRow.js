import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./ChannelRow.css";
import VerifiedIcon from "@material-ui/icons/CheckCircle";
import SubscribeIcon from "@material-ui/icons/NotificationsOutlined";

function ChannelRow({
  image,
  channelName,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  const [subscribeButton, setSubscribeButton] = useState(false);
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channelName} />
      <div className="channelRow__info">
        <div className="channelRow__text">
          <h4>
            {channelName}{" "}
            {verified && (
              <VerifiedIcon style={{ fontSize: "20px", marginLeft: "2px" }} />
            )}
          </h4>
          <p>
            {subs} subscribers • {noOfVideos} videos{" "}
          </p>
          <p>{description}</p>
        </div>
        <div className="channelRow__button">
          <Button
            onClick={(e) => setSubscribeButton(!subscribeButton)}
            className={`${subscribeButton && "subscribed"}`}
            variant="contained"
            color="red"
          >
            {subscribeButton ? "SUBSCRIBED" : "SUBSCRIBE"}
          </Button>
          <SubscribeIcon style={{ marginLeft: "10px" }} />
        </div>
      </div>
    </div>
  );
}

export default ChannelRow;
