import { getRamdomFact } from "../services/facts";
import { useEffect, useState } from "react";

export function useCatFact() {
  const [fact, setFact] = useState();
  const refreshFact = () => {
    getRamdomFact().then((newFact) => setFact(newFact));
  };
  useEffect(refreshFact, []);
  return { fact, refreshFact };
};
