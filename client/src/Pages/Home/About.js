import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
    const skills = [
                "Python",
                "Javascript",
                "React",
                "Node",
                "Express",
                "MongoDB",
                "MySQL",

    ]

  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center">
        <div className="h-[50vh] w-1/2">
          <dotlottie-player
            src="https://lottie.host/aeb7057e-dad8-44ac-9420-cb87f6fcbd45/OR3vaf3BfN.json"
            background="transparent"
            speed="1"
            direction="1"
            playMode="normal"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-white">
            I am a dedicated third-year computer engineering student at the
            University of Ruhuna,Sri Lanka. passionate about the intersection of
            computer science. My strong interest and knowledge
            span various domains, including software development, data science,machine learning
            and artificial intelligence.
          </p>
          <p className="text-white">
          Proficient in programming languages
            such as Python and  Javascript , I have also delved into web
            development using MERN stack, gaining hands-on experience
            through diverse projects and coding challenges. I look forward to
            the opportunity to discuss how my background and passion for
            technology can contribute to the continued success of your team.
          </p>
        </div>
      </div>
      <div className="py-5">
            <h1 className="text-tertiary text-xl">
                Here are a few technologies I've been working with recently : 
            </h1>
            <div className="flex flex-wrap gap-10 mt-5">
                {skills.map((skill, index) => (
                    <div className="border border-tertiary py-3 px-8 rounded-lg ">
                        <h1 className="text-tertiary">{skill}</h1>

                    </div>
                ))}
            </div>
      </div>
    </div>
  );
}

export default About;
