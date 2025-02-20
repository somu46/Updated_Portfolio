import './App.css';

import Navbar from '../src/Components/Navbar/Navbar'
import Intro from '../src/Components/Intro/Intro'
import Projects from '../src/Components/Projects/Projects'
import Education from '../src/Components/Education/Education'
import Contact from '../src/Components/Contact/Contact'
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="bg-neutral-900 text-lime-400">
      <Navbar/>
      <Intro/>
      <Projects/>
      <Education/>  
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
