import { useEffect, useState } from "react";

export function useCatImage({ firstWords }) {
  const CAT_IMAGE_RAMDOM_URL = (word) => {
    return `https://cataas.com/cat/says/${word}?fontSize=30&fontColor=white&width=300&height=200`;
    //return `https://api.thecatapi.com/v1/images/search`
  };
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    if (!firstWords) return;
    const getImageRamdomUrl = async () => {
      const response = await fetch(CAT_IMAGE_RAMDOM_URL(firstWords));
      const imageUrltemp = response.url;
      setImageUrl(imageUrltemp);
    };
    getImageRamdomUrl();
  }, [firstWords]);
  return { imageUrl };
}
