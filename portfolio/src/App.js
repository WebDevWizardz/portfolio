import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Project1 from "./components/ProjectPage/Project1";
import Project2 from "./components/ProjectPage/Project2";
import Project3 from "./components/ProjectPage/Project3";

function App() {
  return (
    <div className="font-display">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Project1 />} path="/project1" />
          <Route element={<Project2 />} path="/project2" />
          <Route element={<Project3 />} path="/project3" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
