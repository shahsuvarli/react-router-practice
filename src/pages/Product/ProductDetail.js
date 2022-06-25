import React, { Component } from "react";
// import { useParams } from "react-router-dom";

export default class ProductDetail extends Component {
  render() {
    // const { operation, operand1, operand2 } = useParams();
    console.log("router", this.props);
    console.log(("location", window.location));
    return (
      <div>
        <h1>{/* {operation} {operand1} {operand2} */}</h1>
      </div>
    );
  }
}
