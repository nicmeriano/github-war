import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import PropTypes from "prop-types";

export default function Card({
  header,
  subheader,
  avatar,
  href,
  name,
  children
}) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card bg-${theme}`}>
          <h4 className="header-lg center-text">{header}</h4>
          <img src={avatar} alt={`Avatar for ${name}`} className="avatar" />
          {subheader && <h4 className="center-text">{subheader}</h4>}

          <h5 className="center-text">
            <a href={href} className="link">
              {name}
            </a>
          </h5>
          {children}
        </div>
      )}
    </ThemeConsumer>
  );
}

Card.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
