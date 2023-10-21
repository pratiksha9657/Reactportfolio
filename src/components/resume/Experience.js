import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          
          <h2 className="text-4xl font-bold">Internships</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Developer intern"
            subTitle=""
            result="Pune"
            des="Developed website for POYV private limited using HTML,CSS,Javascript and deployed using netlify"
          />
          <ResumeCard
            title="Web Developer intern"
            subTitle="Oasis infobyte"
            result="Pune"
            des="Completed 3 tasks of front end development"
          />
          
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;