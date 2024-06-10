"use client"
import { Select } from 'antd';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
// Register the required components
Chart.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='w-[20%] min-h-[515px] bg-white rounded flex items-center p-4 justify-start flex-col gap-8 relative'>
      <div className='flex justify-between items-center'>
        <h2 className='font-semibold text-custom_blue'>Your Pie Chart</h2>
        <Select
        className='text-gray-400'
      defaultValue="Monthly"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'monthly', label: 'Monthly' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'daily', label: 'Daily' },

      ]}
    />
      </div>
      <Pie data={{
        datasets:[
          {
            label:"Your files",
            data:[63, 25,15],
            backgroundColor:["aqua", "blue","#ddebf7"]
          },
          // {
          //   label:"System",
          //   data:[55],
          //   backgroundColor:"blue"
          // }
        ]
      }}/>
      <div className='w-full flex justify-between items-center'>
        <div className='text-center text-sm font-medium text-gray-500 flex items-center justify-center flex-col'>
         <div className='flex items-center justify-center gap-2'> <div className='w-[7px] h-[7px] bg-[#00ffff] rounded-full'></div>Your files</div>
          <span className='text-custom_blue font-semibold'>63%</span>
           </div>
           <div className='text-center text-sm font-medium text-gray-500 flex items-center justify-center flex-col'>
         <div className='flex items-center justify-center gap-2'> <div className='w-[7px] h-[7px] bg-blue-700 rounded-full'></div>System</div>
          <span className='text-custom_blue font-semibold'>63%</span>
           </div>
      </div>
    </div>
  )
}

export default PieChart