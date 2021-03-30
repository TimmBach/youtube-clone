import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          image="https://talksport.com/wp-content/uploads/sites/5/2020/01/GettyImages-1192179860.jpg?strip=all&w=960&quality=100"
          title="Ronaldo breaks international goal scoring record"
          channel="True Sports"
          views="3.7M views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/a/AGF-l796iNXCciTVeNf6MSKB5Shh5DAqhFxzI0GSBA=s900-c-k-c0xffffffff-no-rj-mo"
        />
        <VideoCard
          image="https://www.foot01.com/img/images/1920x1080/2018/Feb/05/mu-cristiano-ronaldo-bale-griezmann-mourinho-n-en-veut-plus-iconsport_icon_fir_260917_23_50,209091.jpg"
          title="Ronaldo breaks UCL record"
          channel="Sky Sports"
          views="12.2M views"
          timestamp="6 days ago"
          channelImage="https://th.bing.com/th/id/OIP.4L467Z6F4RqQ8sEbuXMP4gHaHa?pid=ImgDet&rs=1"
        />
        <VideoCard
          image="https://misterstocks.com/wp-content/uploads/2019/06/tiger-woods-memorial-e1560690443675.jpg"
          title="Tiger woods wins another major"
          channel="Super Sports"
          views="1.2M views"
          timestamp="2 weeks ago"
          channelImage="https://www.mobilitaria.com/wp-content/uploads/2014/06/SuperSport-logo.jpg"
        />
        <VideoCard
          image="https://media.popculture.com/2020/09/naomi-osaka-withdraws-french-open-hamstring-injury-20094239-1280x0.jpeg"
          title="Naomi Osaka wins US title again"
          channel="Fox Sports"
          views="3.7M views"
          timestamp="20 mins ago"
          channelImage="https://uploads.metropoles.com/wp-content/uploads/2019/11/14150010/Fox-Sports.jpg"
        />
        <VideoCard
          image="https://images.indianexpress.com/2021/01/Naomi-Osaka-Louis-Vuitton_1200.jpg"
          title="Naomi Osaka for Louis Vuitton"
          channel="E! News"
          views="765k views"
          timestamp="2 years ago"
          channelImage="https://www.theundergroundchicago.com/wp-content/uploads/2014/06/e_news_online_logo.jpg"
        />
        <VideoCard
          image="https://img.europapress.es/fotoweb/fotogaleriafamosos_58250_1024.jpg"
          title="Prince Charles recovers from COVID-19"
          channel="E! News"
          views="7M views"
          timestamp="2 days ago"
          channelImage="https://www.lupusresearch.org/wp-content/uploads/2017/11/Enews-logo.jpg"
        />
        <VideoCard
          image="https://talksport.com/wp-content/uploads/sites/5/2020/01/GettyImages-1192179860.jpg?strip=all&w=960&quality=100"
          title="Ronaldo breaks international goal scoring record"
          channel="True Sports"
          views="3.7M views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/a/AGF-l796iNXCciTVeNf6MSKB5Shh5DAqhFxzI0GSBA=s900-c-k-c0xffffffff-no-rj-mo"
        />
        <VideoCard
          image="https://www.foot01.com/img/images/1920x1080/2018/Feb/05/mu-cristiano-ronaldo-bale-griezmann-mourinho-n-en-veut-plus-iconsport_icon_fir_260917_23_50,209091.jpg"
          title="Ronaldo breaks UCL record"
          channel="Sky Sports"
          views="12.2M views"
          timestamp="6 days ago"
          channelImage="https://th.bing.com/th/id/OIP.4L467Z6F4RqQ8sEbuXMP4gHaHa?pid=ImgDet&rs=1"
        />
        <VideoCard
          image="https://misterstocks.com/wp-content/uploads/2019/06/tiger-woods-memorial-e1560690443675.jpg"
          title="Tiger woods wins another major"
          channel="Super Sports"
          views="1.2M views"
          timestamp="2 weeks ago"
          channelImage="https://www.mobilitaria.com/wp-content/uploads/2014/06/SuperSport-logo.jpg"
        />
        <VideoCard
          image="https://media.popculture.com/2020/09/naomi-osaka-withdraws-french-open-hamstring-injury-20094239-1280x0.jpeg"
          title="Naomi Osaka wins US title again"
          channel="Fox Sports"
          views="3.7M views"
          timestamp="20 mins ago"
          channelImage="https://uploads.metropoles.com/wp-content/uploads/2019/11/14150010/Fox-Sports.jpg"
        />
        <VideoCard
          image="https://images.indianexpress.com/2021/01/Naomi-Osaka-Louis-Vuitton_1200.jpg"
          title="Naomi Osaka for Louis Vuitton"
          channel="E! News"
          views="765k views"
          timestamp="2 years ago"
          channelImage="https://www.theundergroundchicago.com/wp-content/uploads/2014/06/e_news_online_logo.jpg"
        />
        <VideoCard
          image="https://img.europapress.es/fotoweb/fotogaleriafamosos_58250_1024.jpg"
          title="Prince Charles recovers from COVID-19"
          channel="E! News"
          views="7M views"
          timestamp="2 days ago"
          channelImage="https://www.lupusresearch.org/wp-content/uploads/2017/11/Enews-logo.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
