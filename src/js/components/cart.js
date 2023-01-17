import React, { useContext } from "react";
import { Theme } from "../content";
const Cart = () => {
  const { cartItems } = useContext(Theme);

  return (
    <div className="cart">
        <h2>Cart</h2>
      <div className="cart-top">
        {cartItems.map((item) => {
          const { idDrink, strDrink, strDrinkThumb } = item;
          console.log(idDrink, strDrink, strDrinkThumb);
          return (
            <div className="item">
              <img src={strDrinkThumb} alt="" />
              <h3>{strDrink}</h3>
              <h5>$20</h5>
            </div>
          );
        })}
      </div>
      <div className="cart-bottom">
        <h3>Total: {cartItems.length * 20}</h3>
      </div>
    </div>
  );
};

export default Cart;
