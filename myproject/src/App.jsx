import { useEffect, useState, useSyncExternalStore } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'chart.js/auto';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import About from './components/About';
import Home from './components/Home';
import Project from './components/projects';
import Blog from './components/Blogs';
import Contact from './components/Contact';
import Currency from './components/currency-converter';
import Notepad from './components/notepad';
import SideBar from './components/SideBar';
import Chat from './components/chat';
import Materials from './components/material';
import Collapsed from './components/collapsed_sidebar';
import LoginPage from './components/login.jsx';
import 'animate.css';
import axios from 'axios'

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/Login'); // Redirect to login page
    }
  }, [isLoggedIn]);

  return isLoggedIn ? <Component {...rest} isLoggedIn= {isLoggedIn} /> : null;
};

function App() {
  const [animate, setAnimate] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileScreen, setMobileScreen] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(null);
  //const {value} = useSelector((state) => state.loggedin)
  const value = useSelector((state) => state.loggedin.value);
  
  useEffect(() => {
    setAnimate(true);
  }, []);
  
  useEffect(() => {
    // Change the tab title when the component mounts
    document.title = 'Muhammad Huzaifa';

    // You can also change the title dynamically based on some state or props.
    // For example, if you have a variable `pageTitle` that you want to use as the title:
    // document.title = pageTitle;

    // Remember to reset the title when the component unmounts to avoid side effects.
    return () => {
      document.title = 'Vite + React';
    };
  }, []);

  useEffect(() => {
    async function captureIPAndSend() {
      try {
        // Collect user's IP
        const userIP = await fetch('https://api.ipify.org?format=json')
          .then((response) => response.json())
          .then((data) => data.ip);
        
        const data = userIP + " Just visited Your Site"
        // Prepare the data to be sent to Formspree
        const dataToSend = {
          data,
        };
        
        
        
        // Send data to Formspree's endpoint
        const response = await fetch('https://formspree.io/f/mgejndpa', {
          method: 'POST',
          body: JSON.stringify(dataToSend),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Submission was successful
          // You can add your success handling logic here
        } else {
          // Submission failed
          // You can add your error handling logic here
          console.error('Form submission failed.');
        }
      } catch (error) {
        console.error('Error capturing IP and sending to Formspree:', error);
      }
    }

    // Call the function to capture IP and send to Formspree
    captureIPAndSend();
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
    <div className={`min-h-screen animate__animated ${animate ? 'animate__slideInUp' : ''}`}>
      <Router>
        <div className="flex h-screen flex-shrink">
          {isMobileScreen ? (
            <div className={`basis-1/12 w-1/12 bg-[#1b1b1e] ${isSidebarOpen ? 'block' : 'block'}`}>
              <Collapsed />
            </div>
          ) : (
            <div className="flex-shrink-0 basis-1/5 drop-shadow-2xl shadow-black border-2 border-l-0 border-pink-950">
              <SideBar />
            </div>
          )}
          <div className="flex-1 bg-[#1b1b1e] overflow-y-auto">
            <div className="flex bg-[#27282b] h-14 justify-center items-center drop-shadow-2xl overflow-x-auto">
              <Materials />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projects" element={<Project />} />
              <Route path="/Blogs" element={<Blog />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Currency-converter" element={<Currency />} />
              <Route path="/Notepad" element={<Notepad />} />
              <Route
                path="/Chat"
                element={<PrivateRoute component={Chat} isLoggedIn={value} />}
              />
              <Route
                path="/Login"
                element={<LoginPage />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
