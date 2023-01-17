import { useFetch } from "./useFetch.js";
import { useState } from "react";
import React from "react";
import DrinkPages from "./pages/index";
import {BrowserRouter as Router} from 'react-router-dom';

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const Theme = React.createContext()
const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { cocktails } = useFetch(`${url}${searchTerm}`);
  const [isRandom, setIsRandom] = useState(false);
  const [cartItems, setCartItems] = useState([])
  return (
    <Router>
      <Theme.Provider value={{cocktails, setSearchTerm, isRandom, setIsRandom, cartItems, setCartItems}}>
        <DrinkPages />
      </Theme.Provider>
    </Router>
  );
};

export default Content;
