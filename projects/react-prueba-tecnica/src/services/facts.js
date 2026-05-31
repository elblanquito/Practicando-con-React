const CAT_TEXT_RAMDOM_URL = "https://catfact.ninja/fact";

export const getRamdomFact = async () => {
  const res = await fetch(CAT_TEXT_RAMDOM_URL);
  const data = await res.json();
  const { fact } = data;
  return fact;
};
