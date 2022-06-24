import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import ProductDetail from "../../pages/Product/ProductDetail";
import Products from "../../pages/Product/Products";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/id=:id" element={<ProductDetail />}></Route>
        </Routes>
      </div>
    );
  }
}
