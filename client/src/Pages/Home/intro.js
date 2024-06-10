import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex items-center justify-between p-10">
      <div className="flex flex-col items-center  gap-8 py-10">
        <h1 className="text-white sm:mt-11">Hi, I am</h1>
        <h1 className="text-7xl sm:text-3xl justify-center text-secondary font-semibold">
          Mohamed Aafrith.
        </h1>
        
        <p className="text-white sm:text-1xl text-2xl w-full sm:w-11/12">
          I'm an Engineering Undergraduate with Strong Fundamentals in Software
          Development, Data Science, ML and AI. I enjoy building sites, ML&AI models and apps.
        </p>
        <div className="">
        <button className="border-2 mt-2 border-tertiary text-tertiary sm:px-3 sm:py-2 px-8 py-3 rounded-xl">
        🚀 Get started
        </button>
        <button className="border-2 mt-2 mx-4 border-tertiary text-tertiary sm:px-3 sm:py-2 px-8 py-3 rounded-xl">
        📄 Download CV 
        </button>

        </div>
      </div>
      
    </div>
  );
}

export default Intro;
