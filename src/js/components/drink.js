import React, { useState, useContext } from 'react'
import LearnMore from "./learnMore";
import { Theme } from "../content";

const Drink = ({drink}) => {
    const [islearnMore, setLearnMore] = useState(false)
    const { cartItems, setCartItems } = useContext(Theme);
    const handleClick = () =>{
        setLearnMore(!islearnMore);
    }
    const handleCart = (e) =>{
      e.preventDefault()
      if (cartItems.includes(drink)){
        return false;
      }
      setCartItems([...cartItems, drink])
      console.log(cartItems)
      return false
    }
    const {
      idDrink,
      strCategory,
      strDrink,
      strDrinkThumb,
      strGlass,
      strInstructions,
    } = drink;
  return (
    <div className={islearnMore ? "drink-learn" : "drink"} key={idDrink}>
      {islearnMore ? (
        <div className="learn-content">
          <div className="learn-name">
            <h3 className="name-1">Name:</h3>
            <h3 className="name-2">{strDrink}</h3>
          </div>
          <div className="learn-name">
            <h3 className="name-1">Category:</h3>
            <h3 className="name-2">{strCategory}</h3>
          </div>
          <div className="learn-name">
            <h3 className="name-1">Glass:</h3>
            <h3 className="name-2">{strGlass}</h3>
          </div>
          <div className="learn-name">
            <h3 className="name-1">Instructions:</h3>
            <h3 className="name-2">{strInstructions}</h3>
          </div>
          <button
            className="noLearn"
            onClick={() => setLearnMore(!islearnMore)}
          >
            Close
          </button>
        </div>
      ) : (
        <div>
          <img src={strDrinkThumb} alt="" className="drinkimage" />
          <div className="details">
            <div className="details-name">
              <h4 className="name">{strDrink}</h4>
              <p className="name">$20</p>
            </div>
            <div className="details-btns">
              <button
                className="details-btn1"
                onClick={handleClick}
                type="button"
              >
                Learn more
              </button>
              <button
                className="details-btn2"
                onClick={handleCart}
                type="button"
              >
                To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Drink
