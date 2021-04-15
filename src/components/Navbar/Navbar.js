import React from "react";
import {
  NavLink
} from "react-router-dom";
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper  blue-grey darken-3">
        <div className="container">
          <NavLink to='/'>
          <div

            className="brand-logo"
            style={{ color: "#ff9100", fontSize: 40, fontWeight: "bold" }}
          >
            <i
              className="material-icons"
              style={{ color: "#ff9100", fontSize: 45 }}
            >
              devices_other
            </i>
            PhoneShop
          </div></NavLink>
          <ul className="right hide-on-med-and-down">
            {/*<li>*/}
            {/*  <NavLink exact to='/' activeClassName={style.selected}>*/}
            {/*    <i className="material-icons left">home</i>*/}
            {/*    Home*/}
            {/*  </NavLink>*/}
            {/*</li>*/}
            <li>
              <NavLink to='/favorites' activeClassName={style.selected}>
                <i className="material-icons left">favorite_border</i>
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink to='/cart' activeClassName={style.selected}>
                <i className="material-icons left">shopping_cart</i>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
