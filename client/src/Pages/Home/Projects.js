import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { projects } from "../../resources/projects";

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
        <SectionTitle title="Projects"/>
        <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 sm:gap-5 border-l-2 border-[#2d4945] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#28dfc315] py-3 sm:py-2 rounded-r-lg sm:w-40"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center gap-10'>
            <img src={projects[selectedItemIndex].image} alt="" className='h-60 w-72'/>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {projects[selectedItemIndex].title}
          </h1>
          <p className="text-white ">
            {projects[selectedItemIndex].description}
          </p>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, 
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects