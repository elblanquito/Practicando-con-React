// constants/catImage.js
export const CAT_IMAGE_BASE_URL = "https://cataas.com/cat";

export const getCatImageUrl = (word) => {
  //return `https://api.thecatapi.com/v1/images/search`
  return `${CAT_IMAGE_BASE_URL}/says/${word}?fontSize=30&fontColor=white&width=300&height=200`;
};
