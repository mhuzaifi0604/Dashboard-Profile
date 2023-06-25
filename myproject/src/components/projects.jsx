import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import thincscorp from '../assets/thincscorp.jpg';
import dollar from '../assets/dollar.jpg';
import notepad from '../assets/notepad.png'

const Project = () => {
    const [isFolded, setIsFolded] = useState(true);
    const navigate = useNavigate();
    const [ref, inView] = useInView({
        triggerOnce: false, // Animation triggers only once when element enters the viewport
    });
    const toggleFold = () => {
        setIsFolded(!isFolded);
    };
    const navigateToCurrencyConverter = () => {
        navigate('/Currency-converter');
      };    
    const navigatetonotepad = () => {
        navigate('/Notepad');
    };
    return (
        <>
            {/* <div className='flex w-90/100 h-16 border-2 border-pink-600 m-8'> */}
            <div className="flex flex-col p-4 m-4">
                <button
                    className="flex items-center h-12 w-full bg-[#333232] px-2 py-1 border-2 border-pink-600 mb-2 text-white"
                    onClick={toggleFold}
                >
                    {isFolded ? '👆 Mini Projects' : '👇 Mini Projects'}
                </button>
                {!isFolded && (
                    <div>
                    <div className="flex flex-grow flex-shrink overflow-auto bg-[#212121] p-2 transition-all duration-500 text-black">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div ref={ref} className="flex flex-grow flex-shrink flex-row">
                            <button onClick={navigateToCurrencyConverter}>
                                <div className={`flex justify-center items-center border-2 border-pink-600 w-14 h-14 hover:w-16 hover:h-16 rounded-full transform transition-transform duration-500 ${inView ? 'translate-x-0' : '-translate-x-10'}`}>
                                    <img src={dollar} alt="My Image" className="w-12 h-12 hover:w-14 hover:h-14 m-2 rounded-full" />
                                </div>
                            </button>

                            <div className={`flex flex-shrink overflow-auto basis-2/3 bg-[#212121] border-2 border-pink-900 w-2/3 h-12 m-4 mt-6 rounded-md my-div transform transition-transform duration-500 ${inView ? 'translate-x-0' : '-translate-x-10'}`}>
                                <h1 className="p-2 text-lg text-justify font-bold font-serif text-pink-500 italic">
                                    Convert Your Currency to Dollars, Pounds etc... | currency converter
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-grow flex-shrink overflow-auto bg-[#212121] p-2 transition-all duration-500 text-black">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div ref={ref} className="flex flex-grow flex-shrink flex-row">
                            <div className={`flex flex-shrink overflow-auto justify-center basis-2/3 bg-[#212121] border-2 border-pink-900 w-2/3 h-12 ml-40 m-4 mt-6 rounded-md my-div transform transition-transform duration-500 ${inView ? 'translate-x-0' : '-translate-x-10'}`}>
                                <h1 className="p-2 text-lg font-bold font-serif text-pink-500 italic">
                                    Keep Track of Your Everyday Activities | Notepad
                                </h1>
                            </div>
                            <button onClick={navigatetonotepad}>
                                <div className={`flex justify-center items-center border-2 border-pink-600 w-14 h-14 hover:w-16 hover:h-16 rounded-full transform transition-transform duration-500 ${inView ? 'translate-x-0' : '-translate-x-10'}`}>
                                    <img src={notepad} alt="My Image" className="w-12 h-12 hover:w-14 hover:h-14 m-2 rounded-full" />
                                </div>
                            </button>
                        </div>
                    </div>
                    </div>
                )}
            </div>
            {/* </div> */}
        </>
    )
}

export default Project;