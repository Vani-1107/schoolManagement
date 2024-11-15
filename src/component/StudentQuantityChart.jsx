import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaSchool } from "react-icons/fa";
ChartJS.register(ArcElement, Tooltip, Legend);

const StudentQuantityChart = ({ six, seven }) => {
  const total = six + seven;

  const data = {
    labels: ['Six', 'Seven'],
    datasets: [
      {
        label: 'Student Quantity',
        data: [six, seven], 
        backgroundColor: ['#2D3748', '#A0AEC0'],
        borderColor: ['#2D3748', '#A0AEC0'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout : '75%',
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-64 relative flex items-center justify-center">
      {/* <div className=""> */}
        <Doughnut data={data} options={options} />
        {/* <div className="absolute text-gray-500 text-3xl">
          <div><FaSchool></FaSchool></div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default StudentQuantityChart;
