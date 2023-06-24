import { defaults } from "autoprefixer"
import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

const Project = () => {
    return (
        <>
            <div className="flex justify-center items-center bg-purple-900 h-screen">
                <h1 className='text-white text-center'>
                    This is Projects Page
                </h1>
            </div>
        </>
    )
}

export default Project;