import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Fade } from 'react-reveal';
import thincscorp from "../assets/thincscorp.jpg";
import dollar from "../assets/dollar.jpg";
import notepad from "../assets/notepad.png";
import bug from "../assets/bug.png";
import shell from "../assets/innoshell.png";
import pk from '../assets/pk.png';
import debit from '../assets/debit.png'
import fms from '../assets/fms.png'

const Project = () => {
    const [isFolded, setIsFolded] = useState(true);
    const [open, setopen] = useState(true);
    const [stacked, setstacked] = useState(true);
    const [ai, setai] = useState(true);
    const navigate = useNavigate();
    const [ref, inView] = useInView({
        triggerOnce: false, // Animation triggers only once when element enters the viewport
    });
    const toggleFold = () => {
        setIsFolded(!isFolded);
    };
    const toggletab = (index) => {
        setopen(!open);
    };
    const togglestack = () => {
        setstacked(!stacked);
    }
    const toggleaitab = () => {
        setai(!ai);
    }
    const navigateToCurrencyConverter = () => {
        navigate("/Currency-converter");
    };
    const navigatetonotepad = () => {
        navigate("/Notepad");
    };
    return (
        <>
            <div className="flex flex-col p-4 m-4 gap-6">
                <h3 className="flex justify-center text-pink-500 font-serif text-md">Click on images with descriptions in project tabs to open project details.</h3>
                <button
                    className="flex items-center h-12 w-full bg-[#333232] px-2 py-1 border-2 border-pink-600 mb-2 text-white"
                    onClick={toggleFold}
                >
                    {isFolded ? "👆 Mini Projects" : "👇 Mini Projects"}
                </button>

                {!isFolded && (
                    <div className="shadow-md shadow-pink-400 rounded-lg">
                        <div className="flex flex-grow flex-shrink overflow-auto bg-[#212121] p-2 transition-all duration-500 text-black">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div ref={ref} className="flex flex-grow flex-shrink flex-row">
                                <button onClick={navigateToCurrencyConverter}>
                                    <div
                                        className={`flex justify-center items-center border-2 border-pink-600 w-14 h-14 hover:w-16 hover:h-16 rounded-full transform transition-transform duration-500 ${inView ? "translate-x-0" : "-translate-x-10"
                                            }`}
                                    >
                                        <img
                                            src={dollar}
                                            alt="My Image"
                                            className="w-12 h-12 hover:w-14 hover:h-14 m-2 rounded-full"
                                        />
                                    </div>
                                </button>

                                <div
                                    className={`flex flex-shrink overflow-auto basis-2/3 bg-[#212121] border-2 border-pink-900 w-2/3 h-12 m-4 mt-6 rounded-md my-div transform transition-transform duration-500 ${inView ? "translate-x-0" : "-translate-x-10"
                                        }`}
                                >
                                    <h1 className="p-2 text-lg text-justify font-bold font-serif text-pink-500 italic h-max">
                                        Convert Your Currency to Dollars, Pounds etc... | currency
                                        converter
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-grow flex-shrink overflow-auto bg-[#212121] p-2 transition-all duration-500 text-black">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div ref={ref} className="flex flex-grow flex-shrink flex-row">
                                <div
                                    className={`flex flex-shrink overflow-auto justify-center basis-2/3 bg-[#212121] border-2 border-pink-900 w-2/3 h-12 ml-40 m-4 mt-6 rounded-md my-div transform transition-transform duration-500 ${inView ? "translate-x-0" : "-translate-x-10"
                                        }`}
                                >
                                    <h1 className="p-2 text-lg font-bold font-serif text-pink-500 italic">
                                        Keep Track of Your Everyday Activities | Notepad
                                    </h1>
                                </div>
                                <button onClick={navigatetonotepad}>
                                    <div
                                        className={`flex justify-center items-center border-2 border-pink-600 w-14 h-14 hover:w-16 hover:h-16 rounded-full transform transition-transform duration-500 ${inView ? "translate-x-0" : "-translate-x-10"
                                            }`}
                                    >
                                        <img
                                            src={notepad}
                                            alt="My Image"
                                            className="w-12 h-12 hover:w-14 hover:h-14 m-2 rounded-full"
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    className="flex items-center h-12 w-full bg-[#333232] px-2 py-1 border-2 border-pink-600 mb-2 text-white"
                    onClick={toggletab}
                >
                    {open ? "👆 Cyber World" : "👇 Cyber World"}
                </button>

                {!open && (
                    <div className="flex flex-col justify-center items-center h-max w-full p-2 bg-[#212121] rounded-lg shadow-md shadow-pink-400 gap-4">
                        <div className={`flex flex-row gap-4`}>
                            <button
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/mhuzaifi0604/spellbound";
                                }}
                                className="w-14 h-14 rounded-full bg-cover border border-pink-900 hover:w-16 hover:h-16"
                                style={{ backgroundImage: `url(${bug})` }}
                            ></button>
                            <h1 className="p-2 text-lg font-bold font-serif text-pink-500 italic border border-pink-900 w-max h-max rounded-lg">
                                A fully integrated and functional C2 framework for all your God
                                Complex. | SpellBound
                            </h1>
                        </div>
                        <div className={`flex flex-row gap-4`}>
                            <h1 className="p-2 text-lg font-bold font-serif text-pink-500 italic border border-pink-900 w-max h-max rounded-lg">
                                An automated obfuscated payload generator & reverse shell
                                creator. | Innocent Shell
                            </h1>
                            <button
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/mhuzaifi0604/innocent-shell";
                                }}
                                className="w-14 h-14 rounded-full bg-cover border border-pink-900 hover:w-16 hover:h-16"
                                style={{
                                    backgroundImage: `url(${shell})`,
                                }}
                            ></button>
                        </div>
                        <div className={`flex flex-row gap-4`}>
                            <button
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/mhuzaifi0604/innocent-shell";
                                }}
                                className="w-14 h-14 rounded-full bg-cover border border-pink-900 hover:w-16 hover:h-16"
                                style={{
                                    backgroundImage: `url(${pk})`,
                                }}
                            ></button>
                            <h1 className="p-2 text-lg font-bold font-serif text-pink-500 italic border border-pink-900 w-max h-max rounded-lg">
                                Automated python script for real-time DOS simulation & Port Scanning. | Port Knocker
                            </h1>

                        </div>
                    </div>
                )}

                <button
                    className="flex items-center h-12 w-full bg-[#333232] px-2 py-1 border-2 border-pink-600 mb-2 text-white"
                    onClick={togglestack}
                >
                    {stacked ? "👆 Full Stack Showcase" : "👇 Full Stack Showcase"}
                </button>

                {!stacked && (
                    <div className="flex flex-col justify-center items-center h-max w-full p-2 bg-[#212121] rounded-lg shadow-md shadow-pink-400 gap-4">
                        <div className={`flex flex-row gap-4`}>
                            <button
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/mhuzaifi0604/Debit-Hub";
                                }}
                                className="w-14 h-14 rounded-full bg-cover border border-pink-900 hover:w-16 hover:h-16"
                                style={{ backgroundImage: `url(${debit})` }}
                            ></button>
                            <h1 className="p-2 text-lg font-bold font-serif text-pink-500 italic border border-pink-900 w-max h-max rounded-lg">
                                A fully integrated and functional online Banking mobile Application. | Debit Hub
                            </h1>
                        </div>
                        <div className={`flex flex-row gap-4`}>
                            <h1 className="p-2 text-lg font-bold font-serif text-pink-500 italic border border-pink-900 w-max h-max rounded-lg">
                                A Full-Stack trello inspired LMS to keep track of To-Dos with seggregated user & admin panels.
                            </h1>
                            <button
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/mhuzaifi0604/Learning-Management-System";
                                }}
                                className="w-14 h-14 rounded-full bg-cover bg-center border border-pink-900 hover:w-16 hover:h-16"
                                style={{
                                    backgroundImage: `url('https://img.freepik.com/premium-vector/lms-learning-management-system-concept-with-icon-set-with-big-word-text-center-vector-illustration_25156-747.jpg?w-1000')`,
                                }}
                            ></button>
                        </div>
                        <div className={`flex flex-row gap-4`}>
                            <button
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/mhuzaifi0604/innocent-shell";
                                }}
                                className="w-14 h-14 rounded-full bg-cover bg-center border border-pink-900 hover:w-16 hover:h-16"
                                style={{
                                    backgroundImage: `url(${fms})`,
                                }}
                            ></button>
                            <h1 className="p-2 text-lg font-bold font-serif text-pink-500 italic border border-pink-900 w-max h-max rounded-lg">
                                A central Databse UI for uploading of files by various vendors impersonatinf a network local cloud.
                            </h1>

                        </div>
                    </div>
                )}

                <button
                    className="flex items-center h-12 w-full bg-[#333232] px-2 py-1 border-2 border-pink-600 mb-2 text-white"
                    onClick={toggleaitab}
                >
                    {ai ? "👆 Full Stack AI Frontier" : "👇 Full Stack AI Frontier"}
                </button>

                {!ai && (
                    <div className="flex flex-col justify-center items-center h-max w-full p-2 bg-[#212121] rounded-lg shadow-md shadow-pink-400 gap-4">

                        <div className={`flex flex-row gap-4`}>
                            <button
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/mhuzaifi0604/sorting-visualizer";
                                }}
                                className={`w-14 h-14 rounded-full bg-cover bg-center border border-pink-900 hover:w-16 hover:h-16 `}
                                style={{ backgroundImage: `url('https://i.ytimg.com/vi/BeoCbJPuvSE/maxresdefault.jpg')` }}
                            ></button>
                            <h1 className="p-2 text-lg font-bold font-serif text-pink-500 italic border border-pink-900 w-max h-max rounded-lg">
                                An AI powered sorting visualizer for 09 different sorting algorithms. | Sorting Visualizer
                            </h1>
                        </div>
                        <div className={`flex flex-row gap-4`}>
                            <h1 className="p-2 text-lg font-bold font-serif text-pink-500 italic border border-pink-900 w-max h-max rounded-lg">
                                A full stack string matching application to any format using multiple AI algorithms. | Resume Hunter
                            </h1>
                            <button
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/mhuzaifi0604/resume-hunter";
                                }}
                                className="w-14 h-14 rounded-full bg-cover bg-center border border-pink-900 hover:w-16 hover:h-16"
                                style={{
                                    backgroundImage: `url('https://www.computerhope.com/jargon/s/search-icon.png')`,
                                }}
                            ></button>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
};

export default Project;
