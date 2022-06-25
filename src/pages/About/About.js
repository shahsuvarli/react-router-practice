import React, { Component } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Hr from "./Hr";
import Finance from "./Finance";
import ErrorPage from "../Error";

export default class About extends Component {
  render() {
    return (
      <main>
        <h1>About</h1>
        <div style={{ display: "grid" }}>
          <Link to="hr">Hr board</Link>
          <Link to="finance">Finance board</Link>
        </div>

        <Routes>
          <Route path="hr" element={<Hr />} />
          <Route path="/" element={<Navigate to="hr" replace={true} />} />
          <Route path="finance" element={<Finance />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    );
  }
}
