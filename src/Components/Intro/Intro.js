import { Link } from "react-scroll";
import { MdOutlineMailLock } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import './intro.css'
import { CiLinkedin } from "react-icons/ci";
import Profile from "../../Assets/SoumyajitRay.jpg";
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
        className=" flex flex-wrap justify-center items-center min-h-auto "
      >
        <div className=" flex flex-wrap justify-center  md:h-screen w-full md:w-[80%]">
          <div className=" flex flex-wrap justify-between h-full w-full m-1 ">
         
         {/* profile picture section for  Mobile  screen  */}

          <div className="md:hidden  flex  flex-wrap justify-center  w-full   max-h-auto ">
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
                  <h1 className=" text-center md:text-left text-[2.1rem] md:text-[3.5rem] font-bold  mx-1 md:mx-3 md:max-h-[11rem]  m-0">
                    Full-Stack [MERN]  Developer <span className='wave' alt='wavy hand'>👋🏻</span>
                  </h1>
                  
                </div>
                <p className="m-0 p-2 md:text-xl w-full md:max-w-[30rem] text-center lg:text-left  md:text ">
                  Hi, I'm <span className="font-bold">Soumyajit Ray</span> .
                  
                  A passionate Frontend React Developer based in Kolkata , India.
                  📍
                </p>
                             
                {/* contact icon list   */}

                <div className=" flex flex-wrap p-3 gap-y-3 gap-x-7 my-5 justify-center md:justify-normal">
                  <a
                    href="https://www.linkedin.com/in/soumyajit-ray-784264242/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiLinkedin className="text-[35px]   hover:text-sky-700 cursor-pointer" />
                  </a>

                  {/* <RiLinkedinBoxLine  className="text-[35px] text-gray-900 " /> */}
                  <a href="/contact" target="_blank" rel="noopener noreferrer">
                    <FiGithub className="text-[30px]   hover:text-sky-700 cursor-pointer" />
                  </a>
                  <a
                    href="soumyajitray415@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineMailLock className="text-[30px]   hover:text-sky-700 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>

            {/* profile picture section for  DeskTop screen  */}

            <div className=" mt-10 md:mt-[6rem] ">
              <img
                src={Profile}
                alt="dp"
                className=" rounded-full w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] relative z-1"
              />
            </div>
          </div>
        </div>
                              
          {/* this is Tech stack section  */}

          <div className="md:absolute  md:bottom-3   flex flex-wrap   w-full p-1 ">
          <div className="flex flex-wrap  md:w-[80%] justify-center md:justify-normal items-center p-1 md:ml-[11rem]  ">
            <span className="flex  justify-center  hover:text-red-600 cursor-pointer">
              <p className="text-lg md:text-xl font-bold  transition-transform duration-300 ease-in-out hover:-translate-y-2.5 ">
                Tech stack <span className="mx-2 md:mx-3 font-mono text-xl md:text-3xl">|</span>
              </p>
            </span>
            <div className="flex flex-wrap flex-row justify-center p-1 mx-auto my-3 md:my-1 md:mx-3 px-3 w-full md:w-[80%]  ">
              <ul className="flex flex-wrap flex-row justify-center px-1 gap-4 md:gap-x-4 mx-auto md:mx-3 my-1">
                <li className="mx-1 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2.5">
                  <Link>
                    <img src="https://skillicons.dev/icons?i=html,css,tailwind"  alt="html , css , tailwind"/>
                  </Link>
                </li>  
                <li className="mx-1 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2.5">
                  <Link>
                    <img src="https://skillicons.dev/icons?i=js,nodejs"  alt="js,Node.js"/>
                  </Link>
                </li>
                <li className="mx-1 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2.5">
                  <Link>
                    <img src="https://skillicons.dev/icons?i=react"  alt="React"/>
                  </Link>
                </li>
                <li className="mx-1 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2.5">
                  <Link>
                    <img src="https://skillicons.dev/icons?i=mongodb" alt="mongodb" />
                  </Link>
                </li>
                <li className="mx-1 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2.5">
                  <Link>
                    <img src="https://skillicons.dev/icons?i=postman" alt="mongodb" />
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;