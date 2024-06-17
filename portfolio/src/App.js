import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage"
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3500)
  }, [])
  return (
    <Router basename="/portfolio">
      <div className="App">
        {isLoading ? (<Loader />) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;