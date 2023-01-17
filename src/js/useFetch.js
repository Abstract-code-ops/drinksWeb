import { useState, useEffect } from "react";


export const useFetch = (url) => {
  const [cocktails, setCocktails] = useState([]);


  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    const { drinks } = products;
    if (drinks) {
      const drinkList = drinks.map((item) => {
        const {
          idDrink,
          strDrink,
          strCategory,
          strGlass,
          strInstructions,
          strDrinkThumb,
        } = item;
        return {
          idDrink,
          strDrink,
          strCategory,
          strGlass,
          strInstructions,
          strDrinkThumb,
        };
      });
      setCocktails(drinkList);
    }
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  return { cocktails };
};
