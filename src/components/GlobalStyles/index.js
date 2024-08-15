import './GlobalStyles.scss';
import React from "react";
import PropTypes from "prop-types";

function GlobalStyles({ children }) {
    return React.Children.only(children);
}
GlobalStyles.prototype={
    children: PropTypes.node.isRequired,
}
export default GlobalStyles;
