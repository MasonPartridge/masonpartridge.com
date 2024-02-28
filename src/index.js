import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/landing-page/index.js";
import "@styles/style.css";
import Portfolio from "./pages/portfolio/index.js";
import NavigationBar from "@components/NavigationBar";
import Footer from "@components/Footer.js";
import Resume from "@pages/resume/index.js";

export default function App() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="max-w-[100vw] bg-background overflow-x-clip">
      <Router>
        <NavigationBar isMobile={isMobile} />
        <div className="pt-16 text-text font-tech">
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
