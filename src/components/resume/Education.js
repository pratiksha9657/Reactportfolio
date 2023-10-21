import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          
          <h2 className="text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-14 w-[900px] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE(Computer)"
            subTitle="International Institute of Information Technology, Pune (2020-2024)"
            result="8.09/10"
            des="2020-2024"
           
            
          />
          <ResumeCard
            title="HSC"
            subTitle="PK Kotecha College (2018 - 2020)"
            result="83.85%"
            des="2018-2020"
          />
          <ResumeCard
            title="SSC"
            subTitle="Ahilyadevi Kanya Vidyalay, Bhusawal (2017 - 2018)"
            result="94.60%"
            des="Secondary education or something"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
