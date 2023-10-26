import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AMZLogo from "../../Assets/download.png";
import "./Header.css";
import SearchBar from "./SearchBar";
import { ShopContext } from "../../Context/ShopContext";

function Header() {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="header">
      <div className="navbar__Wrapper">
        <Link to="/">
          <img src={AMZLogo} alt="Amazon" />
        </Link>

        <div className="delivery__Address">
          <span>Deliver to</span>
          <span>Pakistan</span>
        </div>

        <SearchBar />

        <div className="amazon__options">
          <div className="location__option">
            <span>EN</span>
          </div>
          <div className="nav__options">
            <span>Hello, sign in</span>
            <span>Accounts & Lists</span>
          </div>
          <div className="nav__options">
            <span>Return</span>
            <span>& Orders</span>
          </div>
          <Link to="/cart">
            <div className="nav__options">
              <i className="uil uil-shopping-basket"></i>
              {addToCart.length} Cart
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
