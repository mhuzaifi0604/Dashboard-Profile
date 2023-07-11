import { useEffect, useState } from 'react'
import {
  Link,
  useLocation
} from 'react-router-dom';

import flip from '../assets/flip.svg';
import SearchBox from './search';
import 'animate.css';

function Materials() {
  
  const [pathname, setPath] = useState('');
  const location = useLocation();
  const handleSearch = (searchTerm) => {
    // Perform search logic here
    console.log('Search term:', searchTerm);
  };
  useEffect(()=>{
    setPath(location.pathname);
  }, [location]);
  

  return (
    <>
    
            
    <div className='basis-1/3 justify-center items-center'>
                <SearchBox onSearch={handleSearch} />
              </div>
              <div className='basis-1/3 justify-center items-center text-xl font-sans font-bold text-white text-center'>
                Welcome To {pathname === '/' ? 'Dashboard' : pathname.slice(1)}
              </div>
              <div className='basis-1/3 justify-center items-center'>
                <img src={flip} alt="My Image" className="absolute right-4 top-3 w-8 h-8 fill-red-700" />
                <Link to="https://github.com/mhuzaifi0604/Resume/blob/main/Muhammad_Huzaifa.pdf"
                  className='border-2 border-[#000000] hover:border-[#ffffff] absolute right-14 top-3.5 rounded'
                >
                  <p className='font-sans font-bold text-[#000000] hover:text-[#ffffff] m-1 mt-0'>
                    Resume
                  </p>
                </Link>
              </div>
            
    </>
  )
}
export default Materials;
