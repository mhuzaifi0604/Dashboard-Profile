import { defaults } from "autoprefixer"
import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <div className='flex justify-center items-center bg-green-700 h-screen'>
                <div>
                    <h1 className='text-white text-center'>
                        This is About Page
                    </h1>
                </div>
            </div>
        </>
    )
}

export default About;