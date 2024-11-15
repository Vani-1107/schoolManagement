import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const AttendanceChart = ({ employeeData, studentData, labels }) => {
  const data = {
    labels: labels, // e.g., ['09-Nov', '10-Nov', '11-Nov', ...]
    datasets: [
      {
        label: 'Employee',
        data: employeeData, // e.g., [10, 20, 15, 25, ...]
        borderColor: '#63B3ED',
        backgroundColor: '#63B3ED',
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: 'Student',
        data: studentData, // e.g., [5, 15, 10, 20, ...]
        borderColor: '#F56565',
        backgroundColor: '#F56565',
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#E2E8F0',
        },
        ticks: {
          stepSize: 10,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-72 bg-white shadow rounded-lg">
      {/* <h2 className="text-xl font-semibold mb-4">Weekend Attendance Inspection</h2> */}
      <Line data={data} options={options} />
    </div>
  );
};

export default AttendanceChart;