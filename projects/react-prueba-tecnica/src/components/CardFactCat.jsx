import { useEffect, useState } from "react";
import {getRamdomFact} from "../services/facts"

const CAT_IMAGE_RAMDOM_URL = (word) => {
  //return `https://cataas.com/cat/says/${word}?fontSize=30&fontColor=white&width=300&height=200`;
  return `https://api.thecatapi.com/v1/images/search?&api_key=live_LfVriHfGaeh0m7Fh5LxFsiplOXofY5rQt6YCc2qPoCEd8cSzv0SwlUSR3NSdPGKk`
};

function useCatImage () {

}

export const CardFactCat = () => {
  const [fact, setFact] = useState();
  const [url, setUrl] = useState();
  const [threeFirstWords, setThreeFirstWords] = useState();

  useEffect(() => {
    getRamdomFact().then(newFact => setFact(newFact))
  }, []);

  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact
      .replace(/[^\p{L}\p{N}\s'’ñ]/gu, "")
      .split(" ", 3)
      .join(" ");

    setThreeFirstWords(threeFirstWords);
    const getImageRamdomUrl = async () => {
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      const { url } = data[0];
      setUrl(url);
    };
    getImageRamdomUrl();
  }, [fact]);

  const handleClick = async () => {
    const newFact = await getRamdomFact()
    setFact(newFact)
  };

  return (
    <article className="card-fact-cat" onClick={handleClick}>
      <h1>{threeFirstWords}</h1>
      <section className="article-body">
        {fact && <p className="article-fact">{fact}</p>}
        {url && (
          <img
            src={url}
            alt={`foto de una gato con un texto que dise ${fact.split(" ", 3).join(" ")}`}
          />
        )}
      </section>
    </article>
  );
};
