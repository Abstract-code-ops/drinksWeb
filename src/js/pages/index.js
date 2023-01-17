import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Cart from "../components/cart";

const DrinkPages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </>
  );
};

export default DrinkPages;
