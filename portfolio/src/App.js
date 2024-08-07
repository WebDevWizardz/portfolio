import React, { useEffect } from "react";
import LandingPage from "./components/LandingPage/LandingPage"



function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])


  return (

    <div className="App">
      <LandingPage />
    </div>

  );
}

export default App;
