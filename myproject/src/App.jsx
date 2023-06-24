import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  useLocation
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'chart.js/auto'
import About from './components/About'
import Home from './components/Home'
import Project from './components/projects';
import Blog from './components/Blogs';
import Contact from './components/Contact';
import profile from './assets/profile.jpg';
import circle from './assets/circle.svg';
import flip from './assets/flip.svg';
import SearchBox from './components/search';
import './App.css'
import 'animate.css'


// Add the GitHub icon to the library
library.add(faGithub, faLinkedin, faMedium, faEnvelope, faTwitter);

function App() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  const mailme = () => {
    const email = 'huzzaifaasim@gmail.com';
    window.location.href = `mailto:${email}`;
  }

  const handleSearch = (searchTerm) => {
    // Perform search logic here
    console.log('Search term:', searchTerm);
  };
  

  return (
    <div className={`animate__animated ${animate ? "animate__pulse" : ""}`}>
      <Router>

        <div className='flex flex-row h-screen'>
          <div className="basis-1/5 drop-shadow-2xl shadow-black">
            <div className='h-1/4 bg-[#202126]'>
              <div className="flex justify-center items-center p-4 pb-2">
                <img src={profile} alt="My Image" className="w-28 h-28 rounded-full" />
              </div>
              <div>
                <p className='text-white text-center font-serif font-bold text-xl'>M. Huzaifa</p>
                <p className='text-white text-center font-serif font-normal'>Penetration Tester</p>
              </div>
            </div>
            <div className='flex-none h-2/4 bg-[#202126]'>
              <div className="flex justify-center items-center pt-8">
                <nav>
                  <ul className='items-center'>
                    <li className='font-sans font-md p-6 text-center font-extrabold text-[#6A6A6A] hover:text-white hover:underline'>
                      <Link to="/">Dashboard</Link>
                     
                    </li>
                    <li className='font-sans font-xl p-6 text-center font-extrabold text-[#6A6A6A] hover:text-white hover:underline'>
                      <Link to="/projects">Projects</Link>
                    </li>
                    <li className='font-sans font-xl p-6 text-center font-extrabold text-[#6A6A6A] hover:text-white hover:underline'>
                      <Link to="/blogs">Blogs</Link>
                    </li>
                    <li className='font-sans font-xl p-6 text-center font-extrabold text-[#6A6A6A] hover:text-white hover:underline'>
                      <Link to="/about">About</Link>
                    </li>
                    <li className='font-sans font-xl p-6 text-center font-extrabold text-[#6A6A6A] hover:text-white hover:underline'>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='flex self-end h-1/4 bg-[#202126]'>
              <div className="flex items-end ml-5">
                <Link to="https://github.com/mhuzaifi0604" className='flex items-end'>
                  <FontAwesomeIcon icon={faGithub} className="text-[#6a6a6a] hover:text-white text-2xl m-3" />
                </Link>

                <Link to="https://huzzaifaasim.medium.com" className='flex items-end'>
                  <FontAwesomeIcon icon={faMedium} className="text-[#6a6a6a] hover:text-white text-2xl m-3" />
                </Link>

                <Link to="https://linkedin.com/in/huzaifi0604" className='flex items-end'>
                  <FontAwesomeIcon icon={faLinkedin} className="text-[#6a6a6a] hover:text-white text-2xl m-3" />
                </Link>

                <Link to="https://linkedin.com/in/huzaifi0604" className='flex items-end'>
                  <FontAwesomeIcon icon={faTwitter} className="text-[#6a6a6a] hover:text-white text-2xl m-3" />
                </Link>

                <Link to="#" onClick={mailme} className='flex items-end'>
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#6a6a6a] hover:text-white text-2xl m-3" />
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-4/5 bg-[#1b1b1e]">
            <div className="flex flex-row bg-[#27282b] h-14 justify-center items-center drop-shadow-2xl">
              <div className='basis-1/2 justify-center items-center'>
                <SearchBox onSearch={handleSearch} />
              </div>
              <div className='basis-1/2 justify-center items-center'>
                <img src={flip} alt="My Image" className="absolute right-4 top-3 w-8 h-8 fill-red-700" />
                <Link to="https://github.com/mhuzaifi0604/Resume/blob/main/Muhammad_Huzaifa.pdf"
                  className='border-2 border-[#000000] hover:border-[#ffffff] absolute right-14 top-3.5 rounded'
                >
                  <p className='font-sans font-bold text-[#000000] hover:text-[#ffffff] m-1 mt-0'>
                    Resume
                  </p>
                </Link>
              </div>

            </div>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Projects' element={<Project />}></Route>
              <Route path='/Blogs' element={<Blog />}></Route>
              <Route path='/About' element={<About />}></Route>
              <Route path='/Contact' element={<Contact />}></Route>
            </Routes>
            
  <footer className="bg-[#27282b] h-14 drop-shadow-2xl fixed bottom-0 w-full justify-center items-center">
      <p className='text-center mt-4 fixed right-1/2 text-white underline font-sans italic'>&copy; Muhammad_Huzaifa Copyrights Reserved.</p>
  </footer>


          </div>
        </div>

      </Router>
    </div>
  )
}
export default App
