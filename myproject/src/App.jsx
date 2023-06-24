import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from 'react-router-dom';
import ReactDOM from "react-dom/client";
import About from './components/About'
import Home from './components/Home'
import './App.css'
import profile from './assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


// Add the GitHub icon to the library
library.add(faGithub, faLinkedin, faMedium, faEnvelope);

function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
      <div className='flex flex-row h-screen'>
        <div className="basis-1/5">
          <div className='shadow-xl h-1/4 bg-gray-700'>
            <div className="flex justify-center items-center p-4 pb-2">
              <img src={profile} alt="My Image" className="w-28 h-28 rounded-full" />
            </div>
            <div>
              <p className='text-white text-center font-serif font-bold text-xl'>M. Huzaifa</p>
              <p className='text-white text-center font-serif font-normal'>Penetration Tester</p>
            </div>
          </div>
          <div className='flex-none h-2/4 bg-gray-700'>
            <div className="flex justify-center items-center pt-4">
              <nav>
                <ul className='items-center'>
                  <li className='font-sans font-md p-6 font-extrabold text-gray-900 hover:text-white hover:underline'>
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li className='font-sans font-xl p-6 font-extrabold text-gray-900 hover:text-white hover:underline'>
                    <Link to="/Blogs">Projects</Link>
                  </li>
                  <li className='font-sans font-xl p-6 font-extrabold text-gray-900 hover:text-white hover:underline'>
                    <Link to="/Projects">Blogs</Link>
                  </li>
                  <li className='font-sans font-xl p-6 font-extrabold text-gray-900 hover:text-white hover:underline'>
                    <Link to="/About">About</Link>
                  </li>
                  <li className='font-sans font-xl p-6 font-extrabold text-gray-900 hover:text-white hover:underline'>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='flex self-end h-1/4 bg-gray-700'>
            <div className="flex items-end ml-3">
              <Link to="https://github.com/mhuzaifi0604" className='flex items-end'>
                <FontAwesomeIcon icon={faGithub} className="text-white text-3xl p-4 mb-8" />
                {/* <p className='text-3xl ml-1 mb-4'> | </p> */}
              </Link>

              <Link to="https://huzzaifaasim.medium.com" className='flex items-end'>
                <FontAwesomeIcon icon={faMedium} className="text-white text-3xl p-4 mb-8" />
                {/* <p className='text-3xl ml-1 mb-4'> | </p> */}
              </Link>

              <Link to="https://linkedin.com/in/huzaifi0604" className='flex items-end'>
                <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl p-4 mb-8" />
                {/* <p className='text-3xl ml-1 mb-4'> | </p> */}
              </Link>

              <Link to="huzzaifaasim@gmail.com" className='flex items-end'>
                <FontAwesomeIcon icon={faEnvelope} className="text-white text-3xl p-4 mb-8" />
                {/* <p className='text-3xl ml-1 mb-4'> | </p> */}
              </Link>
            </div>
          </div>
        </div>

        <div className="basis-4/5 bg-red-500">
          Hello2
        </div>
      </div>
      <Routes>
        <Route path='/About' element={<About />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  )
}
export default App
