import { Link } from "react-scroll";
import { MdOutlineMailLock } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

import { CiLinkedin } from "react-icons/ci";
import Profile from "../../Assets/SoumyajitRay.jpg";
import Hello from "../../Assets/SoumyajitRay.jpg";
import { useState } from "react";


const Home = () => {

   const [open, setopen] = useState(false);
  
    const handleShow=()=>{
      setopen(!open)
    }

  return (
    <>
      <div
        id="/home"
        className=" mt-[5.5rem] borde flex flex-wrap justify-center items-center min-h-auto bg-gray-100"
      >
        <div className=" flex flex-wrap justify-center  md:h-screen w-full md:w-[80%]">
          <div className=" flex flex-wrap justify-between h-full w-full m-1 ">
         
         {/* profile picture section for  Mobile  screen  */}

          <div className="md:hidden   flex  flex-wrap justify-center  w-full    max-h-auto ">
              <img
                src={Profile}
                alt="dp"
                className="profile-image mt-[1.5rem] relative z-1 "
              />
            </div>
         
            {/* Intro Text section  */}

            <div className="w-full md:w-[65%] flex flex-wrap mx-1 px-3">
              <div className="flex flex-col md:ml-5  md:pl-3  w-full md:max-w-[50rem] mt-10 md:mt-[6rem] overflow-hidden relative">
                <div className="flex justify-center md:justify-normal items-center">
                  <h1 className=" text-center md:text-left text-[2.1rem] md:text-[3.5rem] font-bold text-gray-800 mx-1 md:mx-3 md:max-h-[11rem]  m-0">
                    Full-Stack [MERN]  Developer
                  </h1>
                  <img
                    src={Hello}
                    alt="hand Icon ."
                    className=" absolute  md:h-[4rem] w-[3rem] md:w-[4rem] ml-3 left-[16rem] md:left-[18rem] top-[3rem] md:top-[6.3rem]"
                  />
                </div>
                <p className="m-0 p-2 md:text-xl text-slate-700 w-full md:max-w-[30rem] text-center lg:text-left  md:text ">
                  Hi, I'm <span className="font-bold">soumyajit ray</span> . A
                  passionate  Full-Stack  Developer based in Kolkata , India.
                  📍
                </p>
                             
                                   {/* contact icon list   */}

                <div className=" flex flex-wrap p-3 gap-y-3 gap-x-7 my-5 justify-center md:justify-normal">
                  <a
                    href="https://www.linkedin.com/in/soumyajit-ray-784264242/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiLinkedin className="text-[35px] text-gray-900  hover:text-sky-700 cursor-pointer" />
                  </a>

                  {/* <RiLinkedinBoxLine  className="text-[35px] text-gray-900 " /> */}
                  <a href="/contact" target="_blank" rel="noopener noreferrer">
                    <FiGithub className="text-[30px] text-gray-900  hover:text-sky-700 cursor-pointer" />
                  </a>
                  <a
                    href="soumyajitray415@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineMailLock className="text-[30px] text-gray-900  hover:text-sky-700 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>

            {/* profile picture section for  DeskTop screen  */}

            <div className=" hidden   md:flex  flex-wrap   w-[34%]    max-h-auto cursor-pointer ">
              <img
                src={Profile}
                alt="dp"
                className="profile-image mt-[5rem] relative z-1 rounded-full "
              />
            </div>
          </div>
        </div>
                              
                              {/* this is Tech stack section  */}

        
        
      </div>
    </>
  );
};

export default Home;