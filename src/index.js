import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/landing-page/index.js";
import CommunityAliPage from "./pages/portfolio/communityali/index.js";
import "@styles/style.css";
import Portfolio from "./pages/portfolio/index.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/portfolio"
          element={<Portfolio/>}
        />
        <Route path="/portfolio/communityali" element={<CommunityAliPage />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
