import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  useLocation
} from 'react-router-dom';
import 'chart.js/auto';
import About from './components/About'
import Home from './components/Home'
import Project from './components/projects';
import Blog from './components/Blogs';
import Contact from './components/Contact';
import Currency from './components/currency-converter';
import Notepad from './components/notepad';
import SideBar from './components/SideBar';
import Chat from './components/chat';
import Materials from './components/material';
import Collapsed from './components/collapsed_sidebar';
import 'animate.css'

function App() {
  const [animate, setAnimate] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileScreen, setMobileScreen] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen animate__animated ${animate ? "animate__slideInUp" : ""}`}>
      <Router>
        <div className='flex h-screen flex-shrink'>
          {/* <div className="flex-shrink-0 md:w-1/5 sm:w-1/10 md:drop-shadow-2xl md:shadow-black md:border-2 md:border-l-0 md:border-pink-950">
            <SideBar/>
          </div> */}
          {isMobileScreen ? (
            <div className={`basis-1/12 w-1/12 bg-[#1b1b1e] ${isSidebarOpen ? 'block' : 'block'}`}>
              {/* Sidebar content */}
              <Collapsed />
            </div>
          ) : (
            <div className="flex-shrink-0 basis-1/5 drop-shadow-2xl shadow-black border-2 border-l-0 border-pink-950">
              {/* Sidebar content */}
              <SideBar />
            </div>
          )}
          <div className="flex-1 bg-[#1b1b1e] overflow-y-auto">
            <div className="flex bg-[#27282b] h-14 justify-center items-center drop-shadow-2xl">
              <Materials/>
            </div>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Projects' element={<Project />}/>
              <Route path='/Blogs' element={<Blog />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/Contact' element={<Contact />}/>
              <Route path='/Chat' element={<Chat />}/>
              <Route path='/Currency-converter' element={<Currency />}/>
              <Route path='/Notepad' element={<Notepad/>}/>
            </Routes>
          </div>
        </div>

      </Router>
    </div>
  )
}
export default App
