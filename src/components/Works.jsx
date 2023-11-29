import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

import { creator, github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>

          <div className="absolute inset-0 flex right-12 justify-end m-3 card-img_hover">
            <div onClick={() => window.open(demo_link, "_blank")} className="green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={creator} alt="demo" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5 cursor-pointer" onClick={() => window.open(demo_link, "_blank")}>
          <h3 className="text-white font-bold text-[24px] select-none">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] select-none">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] leading-[30px]">
          <p className="mb-5">
            The following recent projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code
            repositories and setup instructions within the README file in order to clone &amp; test it locally.
          </p>
          <p>
            This is just a small sampling of projects I've completed, intended to reflect my ability to solve complex problems, work with different technologies, and manage
            projects effectively.
          </p>
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
