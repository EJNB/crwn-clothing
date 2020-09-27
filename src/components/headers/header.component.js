import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.utils";
import {connect} from 'react-redux';

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

// this naming can be anything but mapStateToProps is standard with redux codebases.
// this state parameter is the group reducers
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

/**
 * connect is a HOC, that lets us modify our component to has access to things related to redux.
 */
export default connect(mapStateToProps)(Header);

