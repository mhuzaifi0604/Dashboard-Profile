import { defaults } from "autoprefixer"
import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div className="flex justify-center items-center bg-cyan-900 h-screen">
                <h1 className='text-white text-center'>
                    This is Contact Page
                </h1>
            </div>
        </>
    )
}

export default Contact;