"use client"
import { options } from '@/traficOptions';
import { Chart, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
Chart.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);
function Trafic() {
  return (
    <div className='w-[24%] min-h-[480px] bg-white rounded flex items-center p-4 justify-start flex-col gap-8 relative'>
     <div className='w-full flex items-center justify-between'>
<div className='flex flex-col'>
  <div className='text-gray-400 '>Daily Trafic</div>
  <div className='text-custom_blue text-2xl font-bold flex items-center justify-center gap-2'>2.579 <span className='text-sm text-gray-400 font-normal'>Visitors</span></div>
</div>
<h2 className='text-green-600 font-semibold'>+2.45%</h2>

      </div>
      <div className='w-full h-[340px] flex items-center py-8 justify-center '>
        <Bar  data={{
        labels: [0,4,8,12,16,18,20],
        datasets:[
            {
                label: 'Trafic',
                data: [20, 22, 10, 55, 45, 30,60],
                backgroundColor:"blue",
                 
            }
        ]
       
      }}
      options={
        {
          plugins:{
            legend:{
              display:false
            }
          },          
          scales:{
        x:{
          grid:{
            display:false
          },
         
        },
         y:{
          display: false,
          grid:{
            display:false
          }
        }
      }}}
/>
      </div>
      <div className='text-gray-400 font-bold font-sans'>Trafic</div>
    </div>
  )
}

export default Trafic