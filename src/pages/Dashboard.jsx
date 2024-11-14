import React from 'react'
import IncomeExpenseChart from '../component/IncomeExpenseChart';
import AnnualFeeChart from '../component/AnnualFeeChart';
import { MdHome } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";


function Dashboard() {
  const feeData = {
    total: [1000, 1500, 2700, 3500, 2000, 1000, 0, 0, 0, 0, 0, 0],
    collected: [200, 1200, 300, 2800, 1500, 500, 0, 0, 0, 0, 0, 0],
    remaining: [800, 300, 2400, 700, 500, 500, 0, 0, 0, 0, 0, 0],
  };
  return (
    <div className='pt-16 pl-64'>
      <div className='flex items-center p-4 gap-3 w-full shadow-lg'>
        <div className=' border border-yellow-300 rounded shadow-inner '><MdHome size={24} color='gray' /></div>
        <div className='text-xl font-semibold'>Icon School & College Branch Dashboard</div>
      </div>
      <div className='bg-gray-100'>
      <div className='p-4'>
        <div className='w-full p-3 bg-red-100 rounded-md border border-red-300'>
          <div className='flex gap-2 items-start'> <span className='pt-1'><IoIosWarning size={16} color='maroon' /></span>  <div className='text-red-900 text-sm'>Demo data reset every 30 minute. Any type of image/logo upload is disabled for demo version. Since many users are simultaneously testing the demo, you may find some inconsistencies, If so, you can check it again after a while.</div>
          </div>
        </div>
      </div>

      <div className='p-4 '>
        <div className="flex gap-4">
          {/* income vs expense chart */}
          <div className='w-[40%]'>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Income Vs Expense Of November</h2>
              <IncomeExpenseChart income={5} expense={1} />
            </div>
          </div>
          {/* annual fee chart */}
          <div className='w-[58%]'>
            <div className="bg-white shadow-lg rounded-lg p-2">
              <h1 className="text-lg font-semibold mb-4">Annual Fee Summary</h1>
              <AnnualFeeChart data={feeData} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard