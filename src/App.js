import { Component } from "react";
import "./App.css";
import Header from "./shared/components/Header";
import Body from "./shared/components/Body";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Body />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
