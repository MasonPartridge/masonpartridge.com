import React from "react";
import NavigationBar from "@components/NavigationBar";
import PortfolioGallery from "@components/PortfolioGallery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Project from "@components/Project";

export default function Portfolio() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={path + "/:projectId"}>
          <Project />
        </Route>
        <Route path={path}>
          <div className="flex flex-col items-center h-screen">
            <PortfolioGallery titlePrefix="" />
          </div>
        </Route>
      </Switch>
    </div>
  );
}
