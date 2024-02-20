import React from 'react';
import NavigationBar from '@components/NavigationBar';
import PortfolioGallery from '@components/PortfolioGallery';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";

export default function Portfolio(){
    let { path, url } = useRouteMatch();
    return (
        <div className='flex flex-col items-center h-screen'>
            <PortfolioGallery titlePrefix="" />
      <Switch>
        <Route path={path + "/communityali"}>
          <h1> Community Ali</h1>
        </Route>
        <Route path={path}>
          <h3>Please select a portfolio item.</h3>
        </Route>
      </Switch>
        </div>
    )
}