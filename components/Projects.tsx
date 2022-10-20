import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen flex flex-col relative text-center md:text-left 
  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20 scrollbar-track-gray400/20
      scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center space-y-5
          justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt="Web Projects"
              className="md:max-w-lg max-w-[12rem]"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[F7AB0A]/50">
                  {" "}
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                <br />
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies?.map((technology) => (
                  <Image
                    src={urlFor(technology?.image).url()}
                    key={technology._id}
                    width={40}
                    height={40}
                    alt={technology.title + " logo"}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
              <a
                className="text-xl cursor-pointer text-[#F7AB0A]"
                href={project?.linkToBuild}
              >
                {project?.linkToBuild}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
