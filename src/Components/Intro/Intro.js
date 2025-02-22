import { Link } from "react-scroll";

import './intro.css'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
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
                className="profile-image mt-[5.5rem] relative z-1 h-[15rem] w-[15rem] rounded-full"
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
                  <a href='https://www.facebook.com/soumyajit.ray.75'><FaFacebook color='Gold'/> </a>
                  <a href='https://www.instagram.com/soumyajit_ray/'> <FaInstagram color='Gold'/></a>
                  <a href='https://x.com/SoumyajitRay5'> <FaSquareXTwitter color='Gold'/> </a>
                  <a href='https://www.linkedin.com/in/soumyajit-ray2002/'> <FaLinkedin color='Gold'/></a>
                  <a href='https://github.com/somu46'> <FaGithub color='Gold'/></a>
                </div>
              </div>
            </div>

            {/* profile picture section for  DeskTop screen  */}

            <div className=" mt-10 md:mt-[6rem] ">
              <img
                src={Profile}
                alt="dp"
                className="hidden md:block rounded-full w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] relative z-1"
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
              <ul className="flex flex-wrap flex-row justify-center px-1 gap-4 md:gap-x-4 mx-auto md:mx-3 ">
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