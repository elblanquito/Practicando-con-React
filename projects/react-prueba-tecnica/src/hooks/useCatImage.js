import { useEffect, useState } from "react";
import { getCatImageUrl } from "../utils/catImageUrl";

export function useCatImage({ firstWords }) {
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    if (!firstWords) return;
    const getImageRamdomUrl = async () => {
      const response = await fetch(getCatImageUrl(firstWords));
      const imageUrltemp = response.url;
      setImageUrl(imageUrltemp);
    };
    getImageRamdomUrl();
  }, [firstWords]);
  return { imageUrl };
}
