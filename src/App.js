import { Component, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import Body from "./shared/components/Body";

const Body = lazy(() => import("./shared/components/Body"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<h1>Loading...</h1>}>
            {/* <Home /> */}
            {/* <Header/> */}
            <Body />
          </Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
