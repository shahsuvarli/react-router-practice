import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Contact extends Component {
  render() {
    return (
      <main>
        <h1>Contact</h1>;
        <Navigate to="/about" replace={true} />
      </main>
    );
  }
}
