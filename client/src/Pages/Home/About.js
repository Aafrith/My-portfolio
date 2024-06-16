import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);

  // Add a guard clause to handle cases where portfolioData might be undefined
  if (loading || !portfolioData) {
    return <div>Loading...</div>; // or any other loading state UI
  }

  const { about } = portfolioData;

  // Add another check to ensure about is defined
  if (!about) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  const { skills, imageURL, description1, description2 } = about;

  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="flex-shrink-0 ">
          <img
            src={imageURL}
            alt="Profile"
            className="w-[350px] h-[350px] sm:w-[250px] sm:h-[250px] rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 ml-20 w-full sm:w-full sm:mx-4 sm:mt-8">
          <p className="text-white">{description1 || ""}</p>
          <p className="text-white">{description2 || ""}</p>
        </div>
      </div>
      <div className="py-5 mt-10 sm:mt-4">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-7">
          {skills && skills.length > 0 ? (
            skills.map((skill, index) => (
              <div key={index} className="border border-tertiary py-3 px-8 rounded-lg">
                <h1 className="text-tertiary">{skill}</h1>
              </div>
            ))
          ) : (
            <p className="text-white">No skills listed.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
