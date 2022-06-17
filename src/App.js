import React, { Component } from "react";
import Home from "./home"
import ViewRepo from "./repos"
import Work from "./workandeducation"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="home">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/repository" element={<ViewRepo />} />
        </Routes>
        <Routes>
          <Route path="/workandeducation" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
