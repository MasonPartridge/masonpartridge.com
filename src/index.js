import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/landing-page/index.js";
import CommunityAliPage from "./pages/portfolio/communityali/index.js";
import "@styles/style.css";
import Portfolio from "./pages/portfolio/index.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/portfolio">
          <p>Hello World</p>
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

createRoot(document.getElementById("root")).render(<App />);
