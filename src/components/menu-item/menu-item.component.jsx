import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOW APP</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

/**
 * withRouter: Is a higher order component
 * higher order component: Is essentially a function that takes a component as an argument and
 * returns you a modified component
 * In this case where POWERING UP our MenuItem component to have access to those things related
 * to our router.
 */
