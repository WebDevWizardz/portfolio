import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage"
import Project from "./components/ProjectPage/Project";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project1" element={<Project />} />
          <Route path="/project2" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;