import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calc from "./pages/Calc";
import Reduce from "./pages/Reduce";
import Offset from "./pages/Offset";


function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/calc" element={<Calc />}/>
          <Route path="/reduce" element={<Reduce />}/>
          <Route path="/offset" element={<Offset />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
