import React, { useEffect } from 'react'
import useFetchRand from '../useFetchRand';
import { Theme } from "../content";
import Drink from "./drink";
const Random = () => {
    const cocktail = useFetchRand();
  return (
    <div className="Rand">
      <Drink drink={cocktail} />
    </div>
      );
}

export default Random
