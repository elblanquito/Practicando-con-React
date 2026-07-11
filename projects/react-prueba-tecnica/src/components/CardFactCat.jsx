import { useEffect, useState } from "react";
import { getRamdomFact } from "../services/facts";
import { useCatImage } from "../hooks/useCatImage";

export const CardFactCat = () => {
  const [fact, setFact] = useState();
  const [threeFirstWords, setThreeFirstWords] = useState();
  const { imageUrl } = useCatImage({ threeFirstWords });

  useEffect(() => {
    getRamdomFact().then((newFact) => setFact(newFact));
  }, []);

  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact
      .replace(/[^\p{L}\p{N}\s'’ñ]/gu, "")
      .split(" ", 3)
      .join(" ");
    setThreeFirstWords(threeFirstWords);
  }, [fact]);

  const handleClick = async () => {
    const newFact = await getRamdomFact();
    setFact(newFact);
  };

  return (
    <article className="card-fact-cat" onClick={handleClick}>
      <h1>{threeFirstWords}</h1>
      <section className="article-body">
        {fact && <p className="article-fact">{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`foto de una gato con un texto que dise ${fact.split(" ", 3).join(" ")}`}
          />
        )}
      </section>
    </article>
  );
};
