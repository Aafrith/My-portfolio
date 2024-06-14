import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Loader from "./components/Loader";

function App() {
  const [showLoading, setShowLoading] = useState(false);

 
  return (
    <BrowserRouter>
      {showLoading && <Loader />}
      {!showLoading && (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
