import { useState } from "react";
import "./App.css";
import FullSidebar from "./FullSidebar";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="app">
      <Router>
        <Header onClick={(e) => setSidebar(!sidebar)} />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              {sidebar ? (
                <Sidebar className="app__pageSidebar" />
              ) : (
                <FullSidebar className="app__pageFullSidebar" />
              )}

              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              {sidebar ? (
                <Sidebar className="app__pageSidebar" />
              ) : (
                <FullSidebar className="app__pageFullSidebar" />
              )}

              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
