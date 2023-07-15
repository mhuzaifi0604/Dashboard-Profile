import { useEffect, useState } from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom';
import profile from '../assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faMedium, faTwitter, faHouzz, faCodepen, faBlogger, faCcMastercard, faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// Add the GitHub icon to the library
library.add(faGithub, faLinkedin, faMedium, faEnvelope, faTwitter, faHouzz, faCodepen, faBlogger, faCcMastercard, faFacebookMessenger, faWhatsapp);
function Collapsed() {
  const location = useLocation().pathname;
  const mailme = () => {
    const email = 'huzzaifaasim@gmail.com';
    window.location.href = `mailto:${email}`;
  }
  return (
    <>
      <div className='flex justify-center items-center flex-shrink-0 h-full bg-[#202126]'>
        <nav>
          <ul className='flex flex-col'>
            <li className={`font-sans font-md p-3 text-center font-bold `}>
              <Link to="/" >
                <FontAwesomeIcon icon={faHouzz} className={`${location === '/' ? "text-pink-500 text-3xl" : "text-white text-xl"} `} />
              </Link>
            </li>
            <li className={`font-sans font-md p-3 text-center font-bold `}>
              <Link to="/Projects">
                <FontAwesomeIcon icon={faCodepen} className={`${location === '/Projects' ? "text-pink-500 text-3xl" : "text-white text-xl"} `} />
              </Link>
            </li>
            <li className={`font-sans font-md p-3 text-center font-bold `}>
              <Link to="/Blogs">
                <FontAwesomeIcon icon={faBlogger} className={`${location === '/Blogs' ? "text-pink-500 text-3xl" : "text-white text-xl"} `} />
              </Link>
            </li>
            <li className={`font-sans font-md p-3 text-center font-bold `}>
              <Link to="/About">
                <FontAwesomeIcon icon={faCcMastercard} className={`${location === '/About' ? "text-pink-500 text-3xl" : "text-white text-xl"} `} />
              </Link>
            </li>
            <li className={`font-sans font-md p-3 text-center font-bold `}>
              <Link to="/Contact">
                <FontAwesomeIcon icon={faWhatsapp} className={`${location === '/Contact' ? "text-pink-500 text-3xl" : "text-white text-xl"} `} />
              </Link>
            </li>
            <li className={`font-sans font-md p-3 text-center font-bold `}>
              <Link to="/Chat">
                <FontAwesomeIcon icon={faFacebookMessenger} className={`${location === '/Chat' ? "text-pink-500 text-3xl" : "text-white text-xl"} `} />
              </Link>
            </li>

            <li className={`font-sans font-md p-3 text-center font-bold `}>
              <Link to="https://github.com/mhuzaifi0604" >
                <FontAwesomeIcon icon={faGithub} className="text-white hover:text-white text-xl m-1" />
              </Link>
            </li>
            <li className={`font-sans font-md p-3 text-center font-extrabold `}>
              <Link to="https://huzzaifaasim.medium.com" >
                <FontAwesomeIcon icon={faMedium} className="text-white hover:text-white text-xl m-1" />
              </Link>
            </li>
            <li className={`font-sans font-md p-3 text-center font-extrabold `}>
              <Link to="https://linkedin.com/in/huzaifi0604" >
                <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-white text-xl m-1" />
              </Link>
            </li>
            <li className={`font-sans font-md p-3 text-center font-extrabold `}>
              <Link to="https://linkedin.com/in/huzaifi0604" >
                <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-white text-xl m-1" />
              </Link>
            </li>
            <li className={`font-sans font-md p-3 text-center font-extrabold `}>
              <Link to="#" onClick={mailme} >
                <FontAwesomeIcon icon={faEnvelope} className="text-white hover:text-white text-xl m-1" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Collapsed;