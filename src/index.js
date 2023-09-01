import React from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/LandingPage";
import '@styles/style.css';

export default function App() {
    return (
    <LandingPage />
    );
}

createRoot(document.getElementById("root")).render(<App />);

console.log("Hello World!");
