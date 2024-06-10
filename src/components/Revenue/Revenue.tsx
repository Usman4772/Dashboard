"use client"
import { IoIosStats } from 'react-icons/io'
import { Chart, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { options } from '@/expenseOptions';
Chart.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);

function Revenue() {
  return (
    <div className='w-[48%] min-h-[300px] bg-white flex items-center justify-start flex-col py-4 rounded-lg gap-8 px-8'>
        <div className='w-full flex items-center justify-between'>
            <h2 className='text-xl text-custom_blue font-semibold'>Weekly Revenue</h2>
            <div className='w-[2rem] h-[2rem] rounded-full bg-icon_bg flex items-center justify-center text-blue-700'><IoIosStats /></div>
        </div>
   <div className='w-[80%] h-full flex items-end justify-center'>
   <Bar  data={{
        labels: [17,18,19,20,21,22,23,24,25],
        datasets:[
            {
                label: 'Product A',
                data: [400, 200, 900, 400, 500, 600,650,850,300],
                backgroundColor:"#7654FF",
               barThickness:13,
                borderRadius:20
            },
            {
                label: 'Product B',
                data: [200, 730, 300, 200, 250, 450,700,500,700],
                backgroundColor:"#80D8FF",
              barThickness:13,
                borderRadius:20
            },
          
        ],
        
      }}
      options={{
      plugins:{
legend:{
  display:false
}
      },
        scales:{

        x:{
          stacked:true,
          grid:{
            display:false
          }
        },
        y:{
          display:false,
          stacked:true,
          grid:{
            display:false
          }
        }
      }}}
      />
   </div>
    </div>
  )
}

export default Revenue