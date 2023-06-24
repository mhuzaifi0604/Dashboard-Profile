import { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import { Outlet, Link, useLocation } from "react-router-dom";
import 'animate.css';
import Timeline from "./Timeline";

const Home = () => {
    const location = useLocation();
    const [showGraph, setShowGraph] = useState(false);
    const [chartData, setChartData] = useState([480, 450, 400, 400, 450]);

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
              pointLabels:{
                color: ["#FF5F6D", "#592695", "#005e6a", "#23CE6B", "#2978B5"],
              },
              
            },
            y:{
                ticks:{
                    color: 'white'
                },
                grid:{
                    color: 'rgba(255, 255, 255, 0.1)',
                }
            },
            x:{
                ticks:{
                    color: 'white'
                },
                grid:{
                    color: 'rgba(255, 255, 255, 0.1)',
                }
            }
          },
    };

    return (
        <>
            <div className='flex mt-10'>
                <div className="p-4 pb-0 border border-pink-400 rounded-md mx-2 shadow-2xl w-2/3 h-64 ml-8">
                </div>
                <div className={`p-4 border border-pink-400 rounded-md mx-2 shadow-2xl ml-10 
  flex flex-col justify-center items-center w-6/8 h-80 bg-gradient-to-r from-[#292b48] via-[#292b48] to-[#292b48] ${animate ? "animate__animated animate__bounceInUp" : ""}`}>

                    <p className="text-black text-center p-0 m-0 font-sans font-bold">Portfolio Visit Graph</p>
                    {showGraph ? (
                        <Radar data={data} options={options} className="ml-8 w-full h-9/10 animate-pulse"/>
                    ) : (
                        <div>
                            <h1 className="text-black text-center">This is Home Page</h1>
                        </div>
                    )}
                </div>
            </div>
            <div className="ml-8 -mt-10 w-3/5">
                <div className="flex justify-start items-end">
                    <h1 className="text-white text-left font-serif font-bold italic">
                        GPA Timeline -
                    </h1>
                    <h2 className="text-white text-sm font-serif italic ml-1">
                        From Sem-01 To Sem-06
                    </h2>
                </div>

                
            </div>
            <div className="flex w-90/100 m-12 mt-8 rounded-lg h-32 border-pink-600 shadow-2xl border-2 text-white justify-center items-center">
                <Timeline/>
            </div>

        </>
    );
};

export default Home;