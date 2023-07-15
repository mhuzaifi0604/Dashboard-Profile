import React from 'react';

const TimelineGraph = () => {

  return (

    <div className="flex w-full justify-center items-center">
      <svg className="w-full mr-8 fill-white" viewBox="0 0 1200 200">
        <circle cx="99" cy="98" r="12" fill="#800000" />
        <text x="90" y="75" className="text-sans text-sm italic text-bold text-center">
          😢 Sem-01: 2.59
        </text>
        <circle cx="275" cy="115" r="12" fill="rgba(54, 162, 235, 1)" />
        <text x="270" y="145" color="white" className='text-sans text-sm italic text-bold text-center'>
          😔 Sem-02: 2.8
        </text>
        <circle cx="485" cy="80" r="12" fill='rgba(255, 206, 86, 1)' />
        <text x="480" y="60" className="text-sans text-sm italic text-bold text-center">
          🙄 Sem-03: 2.96
        </text>
        <circle cx="730" cy="120" r="12" fill="rgba(0, 212, 180, 1)" />
        <text x="700" y="155" className="text-sans text-sm italic text-bold text-center">
          😍 Sem-04: 3.35
        </text>
        <circle cx="960" cy="80" r="12" fill="rgba(123, 213, 133, 1)" />
        <text x="920" y="60" className="text-sans text-sm italic text-bold text-center">
          🔥 Sem-05: 3.63
        </text>
        <circle cx="1188" cy="105" r="12" fill="rgba(255, 99, 132, 1)" />
        <text x="1095" y="145" className="text-sans text-sm italic text-bold text-center">
          😈 Sem-06: 3.96
        </text>
        <path
          d="M110,100 Q225,140 350,100 Q475,60 600,100 Q725,140 850,100 Q975,60 1100,100 Q1125,110 1200,105"
          fill="transparent"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default TimelineGraph;
