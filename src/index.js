import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./pages/LandingPage";
import '@styles/style.css';

export default function App() {
    return (
    <LandingPage />
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

console.log("Hello World!");
