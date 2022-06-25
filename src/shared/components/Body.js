import React, { Component, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import About from "../../pages/About/About";
// import Contact from "../../pages/Contact";
// import Home from "../../pages/Home";
// import ProductDetail from "../../pages/Product/ProductDetail";
// import Products from "../../pages/Product/Products";
// import ErrorPage from "../../pages/Error";
// import Header from "./Header";

const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About/About"));
const Contact = lazy(() => import("../../pages/Contact"));
const Products = lazy(() => import("../../pages/Product/Products"));
const ProductDetail = lazy(() => import("../../pages/Product/ProductDetail"));
const ErrorPage = lazy(() => import("../../pages/Error"));
const Header = lazy(() => import("./Header"));

export default class Body extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home/*" element={<Home />} />
          <Route path="/" element={<Navigate to="/home/*" replace={true} />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

// export default Body;
