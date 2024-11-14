import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function IncomeExpenseChart({ income, expense }) {
  
  const total = income + expense;
  const incomePercentage = ((income / total) * 100).toFixed(2);
  const expensePercentage = ((expense / total) * 100).toFixed(2);

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Income vs Expense',
        data: [income, expense],
        backgroundColor: ['#36A2EB', '#FF6384'],
        borderColor: ['#36A2EB', '#FF6384'],
        borderWidth: 1,
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
    <div className="w-full h-64 flex flex-col items-center justify-center">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default IncomeExpenseChart;