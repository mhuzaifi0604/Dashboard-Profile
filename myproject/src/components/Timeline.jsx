import React from 'react';

const TimelineGraph = () => {
    
  return (
    
    <div className="flex w-full justify-center items-center">
      <svg className="w-full fill-white" viewBox="0 0 1200 200">
            <defs>
              <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="red" />
                    <stop offset="33%" stopColor="orange" />
                    <stop offset="66%" stopColor="yellow" />
                    <stop offset="100%" stopColor="green" />
                </linearGradient>
            </defs>
        <circle cx="100" cy="100" r="12" fill="white" />
        <text x="90" y="75" className="text-sans text-sm italic text-bold text-center">
          Sem-01: 2.59
        </text>
        <circle cx="300" cy="100" r="12" fill="white" />
        <text x="300" y="135" color="white" className='text-sans text-sm italic text-bold text-center'>
          Sem-02: 2.8
        </text>
        <circle cx="500" cy="100" r="12" fill='white' />
        <text x="500" y="75" className="text-sans text-sm italic text-bold text-center">
          Sem-03: 2.96
        </text>
        <circle cx="700" cy="100" r="12" fill="white" />
        <text x="700" y="135" className="text-sans text-sm italic text-bold text-center">
          Sem-04: 3.35
        </text>
        <circle cx="900" cy="100" r="12" fill="white" />
        <text x="900" y="75" className="text-sans text-sm italic text-bold text-center">
          Sem-05: 3.63
        </text>
        <circle cx="1100" cy="100" r="12" fill="white" />
        <text x="1100" y="135" className="text-sans text-sm italic text-bold text-center">
          Sem-06: 3.96
        </text>
        <path
          d="M100,100 L300,100 L500,100 L700,100 L900,100 L1100,100"
          fill="transparent"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default TimelineGraph;
