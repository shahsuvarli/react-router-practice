import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
    render() {
      return (
        <div>
          <h1>ErrorPage</h1>
          <Link to="/">back</Link>
        </div>
      );
    }
  }

  export default ErrorPage