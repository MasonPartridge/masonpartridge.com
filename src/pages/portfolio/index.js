import React from "react";
import NavigationBar from "@components/NavigationBar";
import PortfolioGallery from "@components/PortfolioGallery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
    Link,
} from "react-router-dom";
import Project from "@components/Project";

export default function Portfolio() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={path + "/:projectId"}>
          <div className="flex flex-col items-center w-full min-h-screen pt-16">
            <Project />
          </div>
        </Route>
        <Route path={path}>
          <div className="flex flex-col items-center h-screen font-tech pt-16 gap-6">
        <div className="text-2xl justify-start w-full max-w-screen-lg">
          <Link to="/" className="text-text hover:font-bold">
            {"Home "}
          </Link>
          <span className="text-text">{"> "}</span>
          <Link to="/portfolio" className="text-white hover:font-bold">
            {"Portfolio "}
          </Link>
        </div>
            <PortfolioGallery titlePrefix="" />
          </div>
        </Route>
      </Switch>
    </div>
  );
}
