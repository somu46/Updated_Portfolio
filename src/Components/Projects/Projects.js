import { useState } from "react";
import ProjectCard from "../UI-Components/ProjectsCard.js";
import projectData from "../Projects/ProjectsData.js";
import './projects.css';
import Button from "../UI-Components/Button.js";
// text-[#B6834A]

const Project = () => { 
  const length=projectData.length;
  const [extendent, seteEtendent] = useState(true);
  const [count, setcount] = useState((length/2));

  // console.log(count);
  
  const handleShowMore=()=>{
  
    seteEtendent(prev=>!prev)
    setcount(prev=>prev+length)
  }
  const handleShowLess=()=>{
    seteEtendent(prev=>!prev)
    setcount((length/2))
  }


  return (
    <>
      <div
        id="/project"
        className=" text-3xl font-semibold my-3 py-5  gap-3  min-h-screen min-w-full"
      >
        <h1 className="text-center text-4xl font-bold text-[#B6834A]">Projects</h1>
        <div className="flex flex-wrap sm:flex-row fex-col my-3 justify-center items-center gap-4  py-3 ">
      
      {projectData.map((project) => (
     
          project.id<=count && <ProjectCard key={project.id} project={project} />
        
      ))} 
        </div>
        <div className="flex flex-wrap  justify-center m-3" ><Button handleShowLess={handleShowLess} handleShowMore={handleShowMore} extendent={extendent} /> </div>
      </div>
    </>
  );
};

export default Project;