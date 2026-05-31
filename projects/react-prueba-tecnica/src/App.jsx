import { CardFactCat } from "./components/CardFactCat.jsx";
import { IconReload } from "./components/IconReload.jsx";
import { useEffect, useState } from "react";

export function App() {
  const [factCa, setFact] = useState(null);
  const handleClick = () => {

  };

  return (
    <>
      <h1 className="app-title">App de gatitos</h1>
      <button className="single-button" onClick={handleClick}>
        Get new fact{" "}
        <IconReload className="single-button-icon" width={22} height={22} />
      </button>
      <main>
        <CardFactCat />
      </main>
    </>
  );
}
