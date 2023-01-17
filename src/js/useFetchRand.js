import { Theme } from "../js/content";
import { useEffect, useState } from "react";

const useFetchRand = () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const [cocktail, setCocktail] = useState({});

    const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    const { drinks } = products;
    if (drinks) {
        const {
        idDrink,
        strDrink,
        strCategory,
        strGlass,
        strInstructions,
        strDrinkThumb,
        } = drinks[0];
        setCocktail({idDrink, strDrink, strCategory,strGlass,strInstructions,strDrinkThumb});
    }else{
        console.log('Error')
    }
    }
    useEffect(() => {
        getProducts()
    },[]);
    return cocktail ;
};

export default useFetchRand;
