import React from 'react'
import IncomeExpenseChart from '../component/IncomeExpenseChart';
import AnnualFeeChart from '../component/AnnualFeeChart';
import StatisticCard from '../component/StatisticsCard';
import StudentQuantityChart from '../component/StudentQuantityChart';
import { MdHome } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { FaUsers, FaUserGraduate, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';
import { FaIdCard, FaDollarSign, FaRoute, FaWarehouse } from 'react-icons/fa';
import { FaCakeCandles } from "react-icons/fa6";
import AttendanceChart from '../component/AttendanceChart';
import Birthday from '../component/Birthday';


function Dashboard() {
  // for annual fee
  const feeData = {
    total: [1000, 1500, 2700, 3500, 2000, 1000, 0, 0, 0, 0, 0, 0],
    collected: [200, 1200, 300, 2800, 1500, 500, 0, 0, 0, 0, 0, 0],
    remaining: [800, 300, 2400, 700, 500, 500, 0, 0, 0, 0, 0, 0],
  };

  //for statistics data
  const data = [
    { icon: <FaUsers />, title: 'Employee', count: 3, roundedLeft: 'true', roundedRight: 'false' },
    { icon: <FaUserGraduate />, title: 'Students', count: 8, roundedLeft: false, roundedRight: false },
    { icon: <FaUserTie />, title: 'Parents', count: 3, roundedLeft: false, roundedRight: false },
    { icon: <FaChalkboardTeacher />, title: 'Teachers', count: 4, roundedLeft: false, roundedRight: true },
  ];

  // for attendance
  const labels = ['09-Nov', '10-Nov', '11-Nov', '12-Nov', '13-Nov', '14-Nov', '15-Nov'];
  const employeeData = [10, 15, 20, 10, 25, 30, 18];
  const studentData = [5, 10, 15, 5, 10, 15, 7];

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
              <div className="bg-white shadow-lg rounded-lg  pl-6 pr-6 pt-2 pb-6">
                <h2 className="text-lg font-semibold mb-7">Income Vs Expense Of November</h2>
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

          {/* statistics card */}
          <div className='pt-5 pl-1 pr-1'>
            <div className='w-full bg-blue-700 rounded-lg flex'>
              <div className='w-[24%] border-r-2 border-white'>
                <StatisticCard icon={<FaUsers />} size={20} title="Employee" desc="Total Strength" count={3} roundedLeft={true} roundedRight={false}></StatisticCard>
              </div>
              <div className='h-fit w-2 border-r-2 border-white'></div>
              <div className='w-[25%]  border-r-2 border-white'>
                <StatisticCard icon={<FaUserGraduate />} size={20} title="Students" desc="Total Strength" count={8} roundedLeft={false} roundedRight={false}></StatisticCard>
              </div>
              <div className='w-[25%]  border-r-2 border-white'>
                <StatisticCard size={20} icon={<FaUserTie />} title="Parents" desc="Total Strength" count={3} roundedLeft={false} roundedRight={false}></StatisticCard>
              </div>
              <div className='w-[25%]'>
                <StatisticCard size={20} icon={<FaChalkboardTeacher />} title="Teachers" desc="Total Strength" count={4} roundedLeft={true} roundedRight={false}></StatisticCard>
              </div>
            </div>
          </div>


          {/* third section */}
          <div className="flex gap-4 pt-5">
            {/* student quantity chart */}
            <div className='w-[40%]'>
              <div className="bg-white shadow-lg rounded-lg pl-6 pr-6 pt-2 pb-6">
                <h2 className="text-lg font-semibold mb-6">Student Quantity</h2>
                <StudentQuantityChart six={40} seven={60} />
              </div>
            </div>
            {/* attendance chart */}
            <div className='w-[58%]'>
              <div className="bg-white shadow-lg rounded-lg p-2">
                <h1 className="text-lg font-semibold mb-2">Weekend Attendance Inspection</h1>
                <AttendanceChart
                  labels={labels}
                  employeeData={employeeData}
                  studentData={studentData}
                />
              </div>
            </div>
          </div>

          {/* fourth section */}
          <div className='pt-5 pl-1 pr-1'>
            <div className='w-full bg-red-500 rounded-lg flex'>
              <div className='w-[24%] border-r-2 border-white'>
                <StatisticCard size={16} icon={<FaIdCard />} title="Admission" desc="Interval 30 Days" count={3} roundedLeft={true} roundedRight={false}></StatisticCard>
              </div>
              <div className='h-fit w-2 border-r-2 border-white'></div>
              <div className='w-[25%]  border-r-2 border-white'>
                <StatisticCard size={16} icon={<FaDollarSign />} title="Voucher" desc="Total Number" count={8} roundedLeft={false} roundedRight={false}></StatisticCard>
              </div>
              <div className='w-[25%]  border-r-2 border-white'>
                <StatisticCard size={16} icon={<FaRoute />} title="Transport" desc="Total Route" count={3} roundedLeft={false} roundedRight={false}></StatisticCard>
              </div>
              <div className='w-[25%]'>
                <StatisticCard size={16} icon={<FaWarehouse />} title="Foster rooms" desc="Total Rooms" count={4} roundedLeft={true} roundedRight={false}></StatisticCard>
              </div>
            </div>
          </div>

          {/* fifth section */}
          <div className='pt-6'>
          <div className="flex gap-2">
            {/* calendar */}
            <div className='w-[75%]'>
              <div className="bg-white shadow-lg rounded-lg  pl-6 pr-6 pt-2 pb-6">
                <h2 className="text-lg font-semibold mb-7">Calendar</h2>
                <IncomeExpenseChart income={5} expense={1} />
              </div>
            </div>
            {/* birthday chart */}
            <div className='w-[25%] h-fit rounded-lg border'>
              <div className="bg-white pl-8 pr-8 pt-12 pb-12">
                  <div className='flex flex-col gap-8'>
                    <Birthday title="Student" count={5} ></Birthday>
                    <Birthday title="Employee" count={1} ></Birthday>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard