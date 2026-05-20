import { createContext, useEffect, useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Profile from './Components/Profile/Profile';
import Photography from './Components/Photography/Photography';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import StarField from './Components/StarField/StarField';
import { Toaster } from 'react-hot-toast';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Deep space base — canvas starfield sits at z-0, content at z-1 */}
      <div className="min-h-screen bg-white dark:bg-[#04060f] text-gray-900 dark:text-white transition-colors duration-300">
        <StarField />
        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />
          <Intro />
          <About />
          <Resume />
          <Profile />
          <Photography />
          <Projects />
          <Contact />
          <Footer />
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: theme === 'dark' ? '#0e1120' : '#ffffff',
              color: theme === 'dark' ? '#ffffff' : '#111111',
              border: theme === 'dark' ? '1px solid #1e2340' : '1px solid #E5E7EB',
            },
          }}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
