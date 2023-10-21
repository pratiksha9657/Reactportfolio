import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive ,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ECOMMERCE WEBSITE"
          des=" Developed ecommerce website using react.User is able to add items to shopping cart and can see total bill.
          delpoyed using netlify.used varioud react concepts like hooks ,props etc."
          src={projectOne}
          githubLink="https://github.com/pratiksha9657/Ecommerce"
        
        />
        <ProjectsCard
          title="Digital clock"
          des=" Developed digital clock using javascript and bootstrap,Learned fundamental concepts in javascript"
          src={projectTwo}
          githubLink="https://github.com/pratiksha9657/Digital-clock"
        />
        <ProjectsCard
          title="CALOURIES BURNT PREDICTION"
          des="Developed calories prediction website using python.Used Xgboost machine learning algorithm.
          User can able to know calories she or he burnt using various parameters like temperature,weight,height of body"
          src={projectThree}
          githubLink="https://github.com/pratiksha9657/Calouries-prediction-app"
        />
        <ProjectsCard
          title="Weather app"
          des=" Developed Weather app using html,css,javascript and API"
          src={projectFour}
          githubLink="https://github.com/pratiksha9657/weather-app"
        />
        <ProjectsCard
          title="EDUCATIONAL WEBSITE"
          des="Developed eductional website using HTML,CSS,Javascript,which give information about admission in various fields to user"
          src={projectFive}
          githubLink="https://github.com/pratiksha9657/education-consultancy-website"
        />
        <ProjectsCard
          title="EXPENSE TRACKER"
          des="Build expense tracker using Hooks and context API in React"
          src={projectSix}
          githubLink="https://github.com/pratiksha9657/expensetracker"
        />
      </div>
    </section>
  );
}

export default Projects