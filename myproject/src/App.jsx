import { useEffect, useState, useSyncExternalStore } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'chart.js/auto';
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

const PrivateRoute = ({ component: Component, isLoggedIn, setIsLoggedIn, ...rest }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/Login'); // Redirect to login page
    }
  }, [isLoggedIn]);

  return isLoggedIn ? <Component {...rest} isLoggedIn= {isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> : null;
};

function App() {
  const [animate, setAnimate] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileScreen, setMobileScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  
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
                element={<PrivateRoute component={Chat} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route
                path="/Login"
                element={<LoginPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
