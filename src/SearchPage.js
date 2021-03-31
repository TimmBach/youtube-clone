import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTERS</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://simg.nicepng.com/png/small/69-690292_bart-simpson-shooting-a-catapult-bart-simpson-and.png"
        channelName="The Simpsons"
        verified
        subs="1.2M"
        noOfVideos="755"
        description="The Simpsons is an American animated sitcom created by Matt Groening for the Fox Broadcasting Company. "
      />

      <hr />

      <VideoRow
        image="https://n-cdn.serienjunkies.de/hq/102042.jpg"
        title="10 times Simpsons predicted the future"
        subs="1.2M"
        channel="The Simpsons"
        views="9.7M views"
        verified
        description="From correctly predicting the Presidency of Donald Trump to Disney's acquisition of 21st Century Fox, The Simpsons, yes the longest-running animated TV show ever, has correctly predicted a bunch of wild events."
        timestamp="7 months ago"
        channelImage="https://th.bing.com/th/id/R7e564626fd81ea7f0580d59d16609ec5?rik=rZwb77%2bgWN7qjA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f06%2fBart-Simpson.png&ehk=67aWfq0JoD7SNl9m79MLW14dfUbZtRrKpp%2fQ0OZduRg%3d&risl=&pid=ImgRaw"
      />
      <VideoRow
        image="https://imgix.ranker.com/list_img_v2/5350/2565350/original/saddest-episodes-and-moments-from-the-simpsons?w=817&h=427&fm=jpg&q=50&fit=crop"
        title="The kids go to a new school."
        subs="1.2M"
        channel="The Simpsons"
        views="450k views"
        verified
        description="Happy viewing guys. Please subscribe"
        timestamp="3 years ago"
        channelImage="https://th.bing.com/th/id/R7e564626fd81ea7f0580d59d16609ec5?rik=rZwb77%2bgWN7qjA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f06%2fBart-Simpson.png&ehk=67aWfq0JoD7SNl9m79MLW14dfUbZtRrKpp%2fQ0OZduRg%3d&risl=&pid=ImgRaw"
      />
      <VideoRow
        image="https://static.az-cdn.ch/__ip/h4ht1IsbKzac5z2xet7L0WNad2c/05a89416172dc8084ccf73aea905d6e513ae4043/n-ch12-16x9-far"
        title="Funny simpson clips to quarantine to."
        subs="1.2M"
        channel="The Simpsons"
        views="3M views"
        verified
        description="I think we would all like this compilation I put together"
        timestamp="5 months ago"
        channelImage="https://th.bing.com/th/id/R7e564626fd81ea7f0580d59d16609ec5?rik=rZwb77%2bgWN7qjA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f06%2fBart-Simpson.png&ehk=67aWfq0JoD7SNl9m79MLW14dfUbZtRrKpp%2fQ0OZduRg%3d&risl=&pid=ImgRaw"
      />
    </div>
  );
}

export default SearchPage;
