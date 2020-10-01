import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.style.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden && <CartDropDown />}
  </div>
);

// this naming can be anything but mapStateToProps is standard with redux codebases.
// this state parameter is the group reducers
/** Esto { user: { currentUser }} = state es un destructuring anidado, en el state exite una propiedad
 * llamada user y dentro otra llamada currentUser
 */
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

/**
 * connect is a HOC, that lets us modify our component to has access to things related to redux.
 */
export default connect(mapStateToProps)(Header);
