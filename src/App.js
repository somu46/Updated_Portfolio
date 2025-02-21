import './App.css';

import Navbar from '../src/Components/Navbar/Navbar'
import Intro from '../src/Components/Intro/Intro'
import About from '../src/Components/About/About'
import Resume from './Components/Resume/Resume';
import Profile from './Components/Profile/Profile';
import Projects from '../src/Components/Projects/Projects'
import Contact from '../src/Components/Contact/Contact'
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div className="bg-neutral-900 text-lime-400">
      <Navbar/>
      <Intro/>
      <About/>
      <Resume/>
      <Profile/>
      <Projects/> 
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
