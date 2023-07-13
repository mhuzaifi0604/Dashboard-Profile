import { useEffect, useState } from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom';
import profile from '../assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// Add the GitHub icon to the library
library.add(faGithub, faLinkedin, faMedium, faEnvelope, faTwitter);
function SideBar (){
    const location = useLocation().pathname;
    const mailme = () => {
        const email = 'huzzaifaasim@gmail.com';
        window.location.href = `mailto:${email}`;
      }
    return(
        <>
        <div className='h-1/4 bg-[#202126]'>
              <div className="flex flex-shrink-0 justify-center items-center p-4 pb-2">
                <img src={profile} alt="My Image" className="w-28 h-28 rounded-full" />
              </div>
              <div>
                <p className='text-white text-center font-serif font-bold text-xl'>M. Huzaifa</p>
                <p className='text-white text-center font-serif font-normal'>Penetration Tester</p>
              </div>
            </div>
            <div className='flex-none flex-shrink-0 h-2/4 bg-[#202126]'>
              <div className="flex flex-shrink justify-center items-center pt-8">
                <nav>
                  <ul className='items-center'>
                    <li className= {`font-sans font-md p-4 text-center font-extrabold ${location === '/' ? "text-pink-500 underline" : "text-white hover:underline"} `}>
                      <Link to="/">Dashboard</Link>
                    </li>
                    <li className={`font-sans font-md p-4 text-center font-extrabold ${location === '/Projects' ? "text-pink-500 underline" : "text-white hover:underline"} `}>
                      <Link to="/Projects">Projects</Link>
                    </li>
                    <li className={`font-sans font-md p-4 text-center font-extrabold ${location === '/Blogs' ? "text-pink-500 underline" : "text-white hover:underline"} `}>
                      <Link to="/Blogs">Blogs</Link>
                    </li>
                    <li className={`font-sans font-md p-4 text-center font-extrabold ${location === '/About' ? "text-pink-500 underline" : "text-white hover:underline"} `}>
                      <Link to="/About">About</Link>
                    </li>
                    <li className={`font-sans font-md p-4 text-center font-extrabold ${location === '/Contact' ? "text-pink-500 underline" : "text-white hover:underline"} `}>
                      <Link to="/Contact">Contact</Link>
                    </li>
                    <li className={`font-sans font-md p-4 text-center font-extrabold ${location === '/Chat' ? "text-pink-500 underline" : "text-white hover:underline"} `}>
                      <Link to="/Chat">Chat With Me</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='flex flex-shrink self-end h-1/4 bg-[#202126] justify-center'>
              <div className="flex flex-shrink items-end ml-5">
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
        </>
    );
}
export default SideBar;