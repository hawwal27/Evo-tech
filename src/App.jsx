import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Automation from "./Home/Automation/Automation";
import Home from "./Home/Home";





const App = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Automation" element={<Automation/>} />
      </Routes>
    </Router>
  )
}

export default App
