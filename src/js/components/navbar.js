import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isToggle, setIsToggle] = useState(false)
    return (
        <nav>
        <div className="logo">
            <h3 className="logo-name">Something</h3>
        </div>
        <ul className={isToggle?"nav-links open":"nav-links"}>
            <li>
            <Link to="/" className="link">Home</Link>
            </li>
            <li>
            <Link to="/about" className="link">About</Link>
            </li>
            <li>
            <Link to="/contact" className="link">Contact</Link>
            </li>
            <li>
                <Link to='/cart' className="link">Cart</Link>
            </li>
        </ul>
        <button className="burger" onClick={()=>setIsToggle(!isToggle)}>
            <div className="part"></div>
            <div className="part"></div>
            <div className="part"></div>
        </button>
        </nav>
    );
};

export default Navbar;
