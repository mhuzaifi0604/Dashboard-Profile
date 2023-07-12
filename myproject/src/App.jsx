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
import 'animate.css'

function App() {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
  }, []);

  
  

  return (
    <div className={`min-h-screen animate__animated ${animate ? "animate__slideInUp" : ""}`}>
      <Router>
        <div className='flex flex-col md:flex-row h-screen flex-shrink'>
          <div className="flex-shrink basis-1/5 drop-shadow-2xl shadow-black border-2 border-l-0 border-pink-950">
            <SideBar/>
          </div>
          <div className="basis-4/5 bg-[#1b1b1e] overflow-y-auto">
            <div className="flex flex-shrink flex-row bg-[#27282b] h-14 justify-center items-center drop-shadow-2xl">
              <Materials/>
            </div>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Projects' element={<Project />}/>
              <Route path='/Blogs' element={<Blog />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/Contact' element={<Contact />}/>
              <Route path='/Communicate' element={<Chat />}/>
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
