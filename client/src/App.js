// App.js

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { SetPortfolioData, ShowLoading, HideLoading } from "./redux/rootSlice";

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading()); // Show loader before fetching data
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading()); // Hide loader after data is fetched
    } catch (error) {
      console.log(error); // Add proper error handling
      dispatch(HideLoading()); // Ensure loader is hidden on error
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading && <Loader />} {/* Show loader if loading */}
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
