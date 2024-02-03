import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/landing-page/index.js";
import CommunityAliPage from "./pages/projects/communityali/index.js";
import '@styles/style.css';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={LandingPage} />
                <Route path="/projects/communityali" component={CommunityAliPage} />
            </Switch>
        </Router>
    );
}

createRoot(document.getElementById("root")).render(<App />);
