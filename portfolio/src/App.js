import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage"
import Loader from "./components/Loader";


function App() {
  const [isLoading, setIsLoading] = useState(true)


  const handleLoaderComplete = () => {
    setIsLoading(false); // Switch to LandingPage after loader completes
  };



  return (
    <Router basename="/portfolio">
      <div className="App">
        {isLoading ? (<Loader onComplete={handleLoaderComplete} />) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
