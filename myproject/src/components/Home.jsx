import { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import { Outlet, Link, useLocation } from "react-router-dom";
import 'animate.css';
import Timeline from "./Timeline";
import medium from '../assets/medium.png';
import splunk from '../assets/splunk.svg';
import Azure from '../assets/Azure.png';
import metasploit from '../assets/metasploit.png';
import nmap from '../assets/nmap.svg';
import wireshark from '../assets/wireshark.svg';
import vscode from '../assets/vscode.svg';
import react from '../assets/react.svg';
import kali from '../assets/kali.svg';
import cpp from '../assets/cpp.svg';
import js from '../assets/js.png';
import py from '../assets/py.png';
import sql from '../assets/sql.png';
import HTML5 from '../assets/HTML5.png';
import thincscorp from '../assets/thincscorp.jpg';
import csl from '../assets/csl.jpeg';
import { useInView } from 'react-intersection-observer';

const Home = () => {
    const location = useLocation();
    const [showGraph, setShowGraph] = useState(false);
    const [chartData, setChartData] = useState([480, 450, 400, 400, 450]);
    const [ref, inView] = useInView({
        triggerOnce: false, // Animation triggers only once when element enters the viewport
    });
    const [ref2, inView2] = useInView({
        triggerOnce: false, // Animation triggers only once when element enters the viewport
    });
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);

    useEffect(() => {
        if (location.pathname === "/") {
            setShowGraph(true);
        } else {
            setChartData((prevData) => {
                const newData = [...prevData];
                const currentPageIndex = getPageIndex(location.pathname);
                if (currentPageIndex !== -1) {
                    newData[currentPageIndex] += 1;
                }
                return newData;
            });
            setShowGraph(false);
        }
    }, [location.pathname]);

    const getPageIndex = (pathname) => {
        const labels = ["Dashboard", "projects", "blogs", "contact", "about"];
        return labels.findIndex((label) => label === pathname);
    };

    const data = {
        labels: ["Dashboard", "Projects", "Blogs", "Contact", "About"],
        datasets: [
            {
                label: "# of visits",
                data: chartData,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.4)",
                    "rgba(54, 162, 235, 0.3)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.3)",
                    "rgba(123, 213, 133, 0.4)"
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(0, 212, 180, 1)"
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: "y",
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
        },
        scales: {
            r: {
                suggestedMin: 200, // Set the minimum range value
                suggestedMax: 500,
                grid: {
                    color: 'rgba(0, 0, 0, 0.5)',
                },
                ticks: {
                    stepSize: 50, // Set the step size for tick marks
                    color: ["#FF5F6D", "#FFC371", "#FF9F1C", "#23CE6B", "#2978B5"],
                    fontColor: 'blue'
                },
                angleLines: {
                    display: true,
                    color: 'red'
                },
                pointLabels: {
                    color: ["#FF5F6DFF", "#FF592695", "#005e6aFC", "#23CE6B", "#2978B5"],
                },

            },
            y: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                }
            }
        },
    };

    return (
        <>
            <div className='flex flex-grow flex-shrink mt-8'>
                <div className="flex-grow flex-shrink overflow-auto p-4 pb-0 border border-pink-400 rounded-md mx-3 w-3/5 h-64 ml-8 bg-[#212121] hover:bg-pink-950 hover: bg-opacity-90 hover:animate-pulse hover:shadow-gray-700 hover:shadow-md">
                    <p className="text-pink-200 font-serif text-2xl font-extrabold text-justify">About Me</p>
                    <p className="text-white text-sm text-justify font-sans font-normal leading-8 italic">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Huzaifa is a Final-Year Cyber Security student at FAST-NUCES
                        with a passion for secure software developmeent, penetration testing & protection against digital threats.
                    </p>
                    <p className="text-white text-sm text-justify font-sans font-normal leading-8 italic">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Throughout his career, huzaifa has honed his skills in different fields like:</p>
                    <ol className="leading-8">
                        <li>
                            <span className="text-white text-sm text-left font-sans italic font-normal">🖥&nbsp;Web Development</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="text-white text-sm font-sans italic font-normal">👮&nbsp;Digital Forensics</span>
                        </li>
                        <li>
                            <span className="text-white text-sm text-left font-sans italic font-normal">🔐&nbsp;Penetration Testing</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="text-white text-sm text-right font-sans italic font-normal">🕷&nbsp;Malware Analysis</span>
                        </li>
                    </ol>
                    <p className="text-white text-sm text-justify font-sans font-normal leading-8 italic">
                        Scroll Down & get to Know Huzaifa More...
                    </p>
                </div>
                <div className={`flex-grow flex-shrink p-4 border border-pink-400 rounded-md mx-6 shadow-md shadow-gray-700 ml-10 
  flex flex-col justify-center items-center w-1/3 h-72 bg-gradient-to-r from-[#292b48] via-[#292b48] to-[#292b48] ${animate ? "animate__animated animate__bounceInUp" : ""}`}>

                    <p className="text-white text-center p-0 m-0 font-sans font-bold">Portfolio Visit Graph</p>
                    {showGraph ? (
                        <Radar data={data} options={options} className="ml-8 w-full h-9/10 animate-pulse" />
                    ) : (
                        <div>
                            <h1 className="text-black text-center">This is Home Page</h1>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex-grow flex-shrink overflow-x-auto overflow-y-hidden ml-8 -mt-2 w-3/5">
                <div className="flex justify-start items-end">
                    <h1 className="text-white text-left font-serif font-bold italic">
                        GPA Timeline -
                    </h1>
                    <h2 className="text-white text-sm font-serif italic ml-1">
                        From Sem-01 To Sem-06
                    </h2>
                </div>


            </div>
            <div className="flex w-90/100 m-12 mt-4 mb-6 rounded-lg h-32 border-pink-600 shadow-2xl border-2 text-white justify-center items-center bg-gradient-to-r from-pink-900 via-[#fc6c85] to-pink-950 bg-opacity-80">
                <Timeline />
            </div>
            <div className="flex-grow flex-shrink relative">
                <div className="border-t border-pink-600 m-4 mt-8"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1b1b1e] px-4">
                    <span className="text-pink-600 text-lg font-serif">Tools I'm Familiar With</span>
                </div>
            </div>
            <div className="flex-grow flex-shrink w-90/100 h-40 shadow-white m-10 mt-6">
                <div className="flex flex-grow flex-shrink justify-center items-center w-90/100 h-20 ml-10 mr-10 mt-0">
                    <img src={medium} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={splunk} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={Azure} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={metasploit} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={nmap} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={wireshark} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={vscode} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={react} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={kali} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                </div>
                <div className="flex flex-grow flex-shrink justify-center items-center w-90/100 h-20 m-10 mt-0">
                    <img src={cpp} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={py} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={js} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={HTML5} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                    <img src={sql} alt="My Image" className="w-14 h-14 hover:w-16 hover:h-16 m-2" />
                </div>
                <div className={`flex-grow flex-shrink relative ${animate ? "animate__slideIn" : ""}`}>
                    <div className="border-t border-pink-600 m-4"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1b1b1e] px-4">
                        <span className="text-pink-600 text-lg font-serif">Where I' ve Worked</span>
                    </div>

                </div>
                <div ref={ref} className="flex flex-grow flex-shrink flex-row">
                    <div className={`flex justify-center items-center border-2 border-pink-600 w-32 h-32 hover:w-40 hover:h-40 rounded-full transform transition-transform duration-500 ${inView ? 'translate-x-0' : '-translate-x-10'}`}>
                        <img src={thincscorp} alt="My Image" className="w-30 h-30 hover:w-36 hover:h-36 m-2 rounded-full" />
                    </div>
                    <div className={`flex flex-shrink overflow-auto basis-2/3 bg-[#212121] border-2 border-pink-900 w-2/3 h-32 m-4 mt-6 rounded-md my-div transform transition-transform duration-500 ${inView ? 'translate-x-0' : '-translate-x-10'}`}>
                        <h1 className="p-2 text-lg text-justify font-bold font-serif text-pink-500 italic">
                            Cyber Defense & Network Security Intern, Thincscorp
                            <p className="text-white text-sm text-justify font-sans font-normal leading-8 italic">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                As a network security intern, I gained hands-on experience with:

                            </p>
                            <span className="text-white text-sm font-sans italic font-normal">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                • SIEM (Splunk/ IBM QRadar)
                            </span>
                            <br></br>
                            <span className="text-white text-sm font-sans italic font-normal">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                • Risk Management
                            </span>
                        </h1>
                    </div>
                </div>
                <div ref={ref2} className="flex flex-row flex-grow flex-shrink">

                    <div className={`flex flex-grow flex-shrink overflow-auto basis-2/3 bg-[#212121] border-2 border-pink-900 w-2/3 h-32 ml-40 mt-14 rounded-md my-div transform transition-transform duration-500 ${inView2 ? 'translate-y-5' : '-translate-y-5'}`}>
                        <h1 className="p-2 text-lg text-justify font-bold font-serif text-pink-500 italic">
                        Blue Team Trainer, Cyber Space Legion
                            <p className="text-white text-sm text-justify font-sans font-normal leading-8 italic">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Blue team trainer updating juniorstudents on latest cybersecurity trends and practices and:
                            </p>
                            <span className="text-white text-sm font-sans italic font-normal">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                • Arranged multiple workshops
                            </span>
                            <br></br>
                            <span className="text-white text-sm font-sans italic font-normal">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                • Created challengesfor a national level CTF (Capture the Flag)
                            </span>
                        </h1>
                    </div>
                    <div className={`flex justify-center items-center ml-8 border-2 border-pink-600 w-32 h-32 hover:w-40 hover:h-40 rounded-full transform transition-transform duration-500 ${inView2 ? 'translate-y-12' : '-translate-y-5'}`}>
                        <img src={csl} alt="My Image" className="w-30 h-30 hover:w-36 hover:h-36 m-2 rounded-full" />
                    </div>
                </div>
                <footer className="flex-grow flex-shrink flex justify-center items-center bg-[#27282b] text-white h-16 mt-12">
                    <p className="text-center">&copy; 2023 M. Huzaifa. All rights reserved.</p>
                </footer>
            </div>

        </>
    );
};

export default Home;