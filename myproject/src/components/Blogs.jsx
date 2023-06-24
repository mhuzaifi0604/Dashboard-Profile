import { defaults } from "autoprefixer"
import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

const Blog = () => {
    return (
        <>
            <div className="flex justify-center items-center bg-blue-700 h-screen">
                <h1 className='text-white text-center'>
                    This is Blogs Page
                </h1>
            </div>
        </>
    )
}

export default Blog;