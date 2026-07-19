import { useCatImage } from "../hooks/useCatImage";
import { useCatFact } from "../hooks/useCatFact";
import { getFirstWords } from "../utils/getFirstWords";

export const CardFactCat = () => {
  const { fact, refreshFact } = useCatFact();
  const firstWords = getFirstWords(fact, 3);
  const { imageUrl } = useCatImage({ firstWords });

  const handleClick = () => {
    refreshFact();
  };

  return (
    <article className="card-fact-cat" onClick={handleClick}>
      <h1>{firstWords}</h1>
      <section className="article-body">
        {fact && <p className="article-fact">{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`foto de una gato con un texto que dise "${firstWords}`}
          />
        )}
      </section>
    </article>
  );
};
