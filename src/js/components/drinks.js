import React from 'react'
import Drink from "./drink";

const Drinks = ({cocktails}) => {
  return (
    <div className="drinks">
        {cocktails.map((drink) => {
          return (
            <Drink drink={drink}/>
          );}
        )}
    </div>
  );
}

export default Drinks
