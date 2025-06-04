import {
  BiLogoAngular,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoMongodb,
} from "react-icons/bi";

import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    { Icon: BiLogoJavascript, name: "JavaScript", color: "text-orange-500" },
    { Icon: BiLogoTypescript, name: "TypeScript", color: "text-sky-500" },
    { Icon: BiLogoAngular, name: "Angular", color: "text-red-500" },
    { Icon: BiLogoReact, name: "React", color: "text-blue-500" },
    { Icon: BiLogoNodejs, name: "Node.js", color: "text-green-500" },
    { Icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-purple-500" },
    { Icon: BiLogoMongodb, name: "MongoDB", color: "text-green-500" },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="skills"
      className="flex min-h-[20vh] w-full flex-col items-center justify-center py-16 scroll-mt-24"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="mb-16 text-4xl font-light text-white md:text-5xl"
      >
        Skills
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 px-3">
        {skillsData.map(({ Icon, name, color }, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={variants}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            <Icon 
              className={`cursor-pointer text-[80px] ${color} transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]`}
            />
            <div className="pointer-events-none absolute -bottom-1 left-1/2 z-10 w-max -translate-x-1/2 translate-y-2 rounded-lg border border-gray-800/50 bg-black/80 px-3 py-1 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
              <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-gray-800/50 bg-black/80" />
              <p className="bg-gradient-to-r from-cyan-600 to-teal-400 bg-clip-text text-sm font-medium text-transparent">
                {name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
