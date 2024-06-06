import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex items-center justify-between p-10">
      <div className="flex flex-col items-start justify-center gap-8 py-10">
        <h1 className="text-white">Hi, I am</h1>
        <h1 className="text-6xl text-secondary font-semibold">
          Mohamed Aafrith.
        </h1>
        <p className="text-white text-xl w-2/3">
          I'm an Engineering Undergraduate with Strong Fundamentals in Software
          Development and Data Science. I enjoy building sites & apps.
        </p>
        <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded-xl">
          Get started
        </button>
      </div>
      <div className="flex-shrink-0">
        <img
          src="/mm.jpeg"
          alt="Mohamed Aafrith"
          className="w-[350px] h-[350px] rounded-full object-cover"
          />
      </div>
    </div>
  );
}

export default Intro;
