import { useEffect, useState } from "react";

export const CardFactCat = () => {
  const CAT_TEXT_RAMDOM_URL = "https://catfact.ninja/fact";
  const CAT_IMAGE_RAMDOM_URL = (word) => {
    return `https://cataas.com/cat/says/${word}?fontSize=30&fontColor=white&width=300&height=200`;
  };
  const [fact, setFact] = useState();
  const [url, setUrl] = useState();
  const [threeFirstWords, setThreeFirstWords] = useState();

  useEffect(() => {
    /* 
    const getRandomFact = async () => {
      const res = await fetch(CAT_TEXT_RAMDOM_URL);
      const data = await res.json();
      setFact(data.fact);
    };
    getRandomFact();
    */
    fetch(CAT_TEXT_RAMDOM_URL)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact
      .replace(/[^\p{L}\p{N}\s'’ñ]/gu, "")
      .split(" ", 3)
      .join(" ");

    setThreeFirstWords(threeFirstWords);
    const getImageRamdomUrl = async () => {
      const response = await fetch(CAT_IMAGE_RAMDOM_URL(threeFirstWords));
      setUrl(response.url);
    };

    getImageRamdomUrl();
  }, [fact]);

  return (
    <article className="card-fact-cat">
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
