import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default class Header extends Component {
  componentDidMount() {
    $("li>*").on("click", function () {
      $("li>*").removeClass("selected");
      $(this).addClass("selected");
    });
  }
  render() {
    return (
      <div className="navbar-container">
        <nav>
          <ul className="main-pages">
            <li>
              <Link to="/" className="button">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="button">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="button">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/products" className="button">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
