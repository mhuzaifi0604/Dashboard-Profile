import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = ({ data }) => {
    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Pages',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Visits',
                },
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineGraph;
