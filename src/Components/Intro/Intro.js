import { Link } from "react-scroll";
import './intro.css'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import Profile from "../../Assets/SoumyajitRay.jpg";


const Home = () => {

  const techStack = [
    { icons: 'html', name: 'HTML' },
    { icons: 'css', name: 'css' },
    { icons: 'tailwind', name: 'Tailwind' },
    { icons: 'mongodb', name: 'MongoDB' },
    { icons: 'js', name: 'JavaScript' },
    { icons: 'react', name: 'React' },
    { icons: 'nodejs', name: 'NodeJs' },
    { icons: 'vscode', name: 'VSCode' },
    { icons: 'postman', name: 'Postman ' },
    { icons: 'git', name: ' Git' }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: 'https://www.facebook.com/soumyajit.ray.75' },
    { icon: FaInstagram, url: 'https://www.instagram.com/soumyajit_ray/' },
    { icon: FaSquareXTwitter, url: 'https://x.com/SoumyajitRay5' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/soumyajit-ray2002/' },
    { icon: FaGithub, url: 'https://github.com/somu46' }
  ];

  return (
    <>
      <div
        id="/home"
        className="flex flex-wrap justify-center items-center min-h-auto "
      >
        <div className="flex flex-wrap justify-center md:h-screen w-full md:w-[80%] px-4">
          <div className="flex flex-col md:flex-row justify-between items-center h-full w-full m-1">
            
            {/* Unified Profile Image */}
            <div className="order-1 md:order-2 relative mt-20 md:mt-0 animate-fade-in">
              <div className="relative">
                <img
                  src={Profile}
                  alt="Soumyajit Ray"
                  className="h-60 w-60 md:h-80 md:w-80 rounded-full border-4 border-white dark:border-slate-800 shadow-xl hover:scale-105 transition-transform duration-300 mx-auto"
                />
                <div className="absolute inset-0 rounded-full border-4 border-yellow-400/100 animate-pulse" />
              </div>
            </div>

            {/* Intro Text Section */}
            <div className="order-2 md:order-1 w-full md:w-[65%] flex flex-wrap mx-1 px-3">
              <div className="flex flex-col md:ml-5 md:pl-3 w-full md:max-w-[50rem] mt-1 md:mt-24 overflow-hidden relative">
                <div className="flex justify-center md:justify-normal items-center">
                  <h1 className="text-center md:text-left text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent mx-1 md:mx-3 m-0 leading-tight">
                    Frontend React
                    <span className="block mt-2">Developer</span>
                    <span className="wave ml-2 text-4xl md:text-5xl">👋🏻</span>
                  </h1>
                </div>
                
                <p className=" p-2 md:text-xl w-full md:max-w-[30rem] text-center lg:text-left text-slate-600 dark:text-slate-300 font-medium -mt-10">
                  Hi, I'm <span className="font-bold text-amber-500 dark:text-amber-400">Soumyajit Ray</span>.
                  A passionate Frontend React Developer based in Kolkata, India. 📍
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 md:mt-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    aria-label={`Visit ${social.icon.name} profile`}
                  >
                    <social.icon className="text-2xl text-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" />
                  </a>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="p-4 md:absolute md:bottom-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center space-y-2 md:flex-row md:items-center md:justify-center md:space-y-0">
            <div className="group flex items-center cursor-default mb-2 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
                Tech Stack
              </h2>
              <span className=" hidden sm:inline-block mx-3 font-bold text-2xl text-slate-400 dark:text-slate-500">|</span>
            </div>

            <div className="w-full md:flex-1">
            <ul className="flex flex-wrap justify-center gap-3 md:flex md:flex-wrap md:gap-6">
      {techStack.map((tech, index) => (
        <li 
          key={index}
          className="group relative cursor-pointer transition-transform duration-300 hover:-translate-y-2.5"
        >
          <Link className="block p-2">
            <img
              src={`https://skillicons.dev/icons?i=${tech.icons}`}
              alt={tech.name}
              className="w-8 h-8 md:w-14 md:h-14 object-contain"
              loading="lazy"
            />
            {/* Tooltip */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 dark:bg-slate-700 whitespace-nowrap">
              {tech.name}
              {/* Tooltip arrow pointing down */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800 dark:border-t-slate-700" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;