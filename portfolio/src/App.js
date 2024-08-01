import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage"



function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])


  return (
    <Router basename="/">


      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
