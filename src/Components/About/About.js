// import VideoSource from "../../assets/video/AboutVideo.mp4";
// import AboutImg from "../../assets/AboutPic.jpg";
// import { motion } from "framer-motion";
import Card from "../UI-Components/Card";


const About = () => {
  return (
    <>
      <div
        id="/about"
        className="m-3 flex flex-wrap justify-center h-auto md:max-h-screen"
      >
            <div className="w-full flex justify-center ">
            <h2 className="text-4xl mx-3 mt-3 font-bold text-yellow-400 text-center">
              About Me
            </h2>
            </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row  justify-between m-1 w-full md:w-[80%]   ">

        
          <div className="flex  flex-wrap w-full md:w-1/2  p-3 mt-3">
            
            <h1 className="relative w-full  flex items-center mx-3 text-3xl font-bold mt-2 mb-2">
              Frontend React Developer based in kolkata
              <h3 className="text-xl absolute mt-[4.8rem] right-[9rem] md:mt-9 md:right-[14rem]">
                📍
              </h3>
            </h1>
            <h3 className="text-lg font-semibold  mx-3 mt-7 ">
              Hey, my name is<b className=""> Soumyajit Ray </b>,
              and I'm a Frontend React Developer. My passion is to create and
              develop complete web apps, focusing on both Design and development.
            </h3>
            <h1 className="text-lg font-semibold   mx-3 mt-5">
              My main stack currently is JavaScript/React.js in combination with
              Tailwind CSS. I am also familiar with Postman for Testing APIs and Little bit of MongoDB also for Database.
            </h1>
          </div>
     
          <div className="flex flex-wrap justify-center  items-center  rounded-md md:w-[40%] mx-auto mb-10 ">
       
          <Card/>
            
       
          </div>
        </div>
      </div>
    </>
  );
};

export default About;