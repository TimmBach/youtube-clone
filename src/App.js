import { useState } from "react";
import "./App.css";
import FullSidebar from "./FullSidebar";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="app">
      <Header onClick={(e) => setSidebar(!sidebar)} />
      <div className="app__page">
        {sidebar ? (
          <Sidebar className="app__pageSidebar" />
        ) : (
          <FullSidebar className="app__pageFullSidebar" />
        )}

        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
