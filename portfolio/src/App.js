import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false); // Wyłącz loader po zakończeniu animacji
  };

  useEffect(() => {
    // Resetuj scroll na górę od razu po załadowaniu aplikacji
    window.scrollTo(0, 0);

    // Dodaj klasę blokującą przewijanie
    document.body.classList.add("no-scroll");

    // Usuwanie klasy i włączenie scrolla, gdy loader się kończy
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.classList.remove("no-scroll");
    }
  }, [isLoading]);

  return (
    <div className="App">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <LandingPage />

    </div>
  );
}

export default App;
