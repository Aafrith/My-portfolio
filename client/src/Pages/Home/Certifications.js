import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Certifications() {
  const [selectedItemIndex , setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { certifications } = portfolioData;

  return (
    <div>
      <SectionTitle title="Certifications" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 sm:gap-5 border-l-2 border-[#436964e3] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {certifications.map((certification, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#28dfc315] py-3 sm:py-2 rounded-r-lg sm:w-40"
                    : "text-white"
                }`}
              >
                {certification.topic}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-5 sm:gap-2 sm:w-full">
          <a
            href={certifications[selectedItemIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-secondary text-2xl text-center mb-5 sm:mb-2">
              {certifications[selectedItemIndex].title}
            </h1>
          </a>

          <a
            href={certifications[selectedItemIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={certifications[selectedItemIndex].image}
              alt={certifications[selectedItemIndex].title}
              className="h-[300px] w-[500px] border border-tertiary rounded-lg sm:h-60 sm:w-80 object-contain" // Increased size for web view
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
