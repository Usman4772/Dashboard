"use client"
import { Button } from 'antd'
import { CiCalendar } from "react-icons/ci";
import { IoIosStats } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { expenseData } from '@/ExpenseTrack';
import { incomeData } from '@/IncomeData';
import { options } from '@/expenseOptions';

// Register the required components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ExpenseTrack() {
  const data = {
    labels: expenseData.map(data => data.label),
    datasets: [
      {
        label: "Expense",
        data: expenseData.map(data => data.value),
        backgroundColor: "#5C31FF",
        borderColor: "#5C31FF",
        barThickness:10,
        fill: false,
        pointRadius: 0,
        tension: 0.5,
        
      },
      {
        label: "Income",
        data: incomeData.map(data => data.value),
        backgroundColor: "aqua",
        borderColor: "aqua",
        fill: false,
        pointRadius: 0,
        tension: 0.5
      }
    ]
  };



  return (
    <div className='w-[48%] min-h-[300px] bg-white flex items-center justify-start flex-col py-4 rounded-lg gap-8 px-8'>
      <div className='w-full flex justify-between items-center '>
        <Button className='px-6 py-1 text-gray-500 flex items-center justify-center gap-2'>
          <CiCalendar /><div>This month</div>
        </Button>
        <div className='w-[2rem] h-[2rem] rounded-full bg-icon_bg flex items-center justify-center text-blue-700'><IoIosStats /></div>
      </div>
      <div className='w-full flex justify-between items-center '>
        <div className='w-[20%] flex flex-col gap-4 py-4'>
          <h1 className='text-3xl font-bold text-custom_blue'>$37.5K</h1>
          <div className='w-full flex justify-center gap-2 items-center '>
            <p className='text-gray-500 text-sm'>Total Spent</p>
            <div className='text-green-700 font-semibold'>+2.46%</div>
          </div>
          <div className='w-full flex justify-center gap-2 items-center text-green-700'>
            <FaCheckCircle />
            <h2 className='text-sm font-semibold'>On track</h2>
          </div>
        </div>
        {/* chart */}
        <div>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default ExpenseTrack
