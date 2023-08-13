import React from "react";
import Home from "../pages/Home";
import { Routes, Route } from "../../node_modules/react-router-dom/dist/index";
import Css from "../pages/Css";
import Html from "../pages/Html";
import JavaScript from "../pages/JavaScript";

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/javascript" element={<JavaScript />} />
        </Routes>
      </>
    );
  }
}
export default App;
