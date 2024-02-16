import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/landing-page/index.js";
import CommunityAliPage from "./pages/portfolio/communityali/index.js";
import "@styles/style.css";
import Portfolio from "./pages/portfolio/index.js";
import NavigationBar from "@components/NavigationBar";

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/portfolio">
          <Portfolio  />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

createRoot(document.getElementById("root")).render(<App />);
