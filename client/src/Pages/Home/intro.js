import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root); // Correctly select loading state

  // Add a guard clause to handle cases where portfolioData might be undefined
  if (loading || !portfolioData) {
    return <div>Loading...</div>; // or any other loading state UI
  }

  const { intro } = portfolioData;

  // Add another check to ensure intro is defined
  if (!intro) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  const { firstName, lastName, welcomeText, description } = intro;

  // URL to your CV file
  const cvUrl = "https://example.com/path/to/your/cv.pdf"; // Replace with your actual CV URL

  return (
    <div className="h-[80vh] bg-primary flex items-center justify-between p-10">
      <div className="flex flex-col items-center gap-8 py-10">
        <h1 className="text-white sm:mt-11">{welcomeText}</h1>
        <h1 className="text-7xl sm:text-3xl justify-center text-secondary font-semibold">
          {firstName || ""}
          {lastName || ""}
        </h1>
        <p className="text-white sm:text-1xl text-2xl w-full sm:w-11/12">
          {description}
        </p>
        <div className="">
          <button className="border-2 mt-2 border-tertiary text-tertiary sm:px-3 sm:py-2 px-8 py-3 rounded-xl">
            🚀 Get started
          </button>
          <a
            href="https://drive.google.com/file/d/1dNGSppFpiI-zODk4MddtSns2gxiGfJEW/view?usp=sharing"
            download
            className="border-2 mt-2 mx-4 border-tertiary text-tertiary sm:px-3 sm:py-2 px-8 py-3 rounded-xl"
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
