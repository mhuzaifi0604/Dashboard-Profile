import { defaults } from "autoprefixer"
import { Component } from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <>
                <div>

                    <h1 className='text-black text-center'>
                        This is Home Page
                    </h1>
                </div>
        </>
    )
}

export default Home;