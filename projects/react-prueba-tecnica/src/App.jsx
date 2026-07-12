import { useEffect, useState } from "react";
import { CardFactCat } from "./components/CardFactCat.jsx";
import { IconReload } from "./components/IconReload.jsx";

export function App() {
  const [cards, setCards] = useState([0]);
  const [factCa, setFact] = useState(null);
  const handleClick = () => {
    setCards((prev) => [...prev, prev.length]);
  };

  return (
    <>
      <h1 className="app-title">App de gatitos</h1>
      <button className="single-button" onClick={handleClick}>
        Get new fact{" "}
        <IconReload className="single-button-icon" width={22} height={22} />
      </button>
      <main>
        {cards.map((id) => (
          <CardFactCat key={id} />
        ))}
      </main>
    </>
  );
}
