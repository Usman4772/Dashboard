import React from 'react'

interface Details{
  icon?:any,
  title:string,
  price?:any,
  tasks?:number ,
  desc?:string
}
function StatField({icon,title,price,tasks,desc}:Details) {
  return (
    <div className='w-[305px] h-[5rem] bg-white rounded-lg py-12 flex items-center justify-start gap-8 px-8'>
{icon?<div className='w-[3rem] h-[3rem] rounded-full bg-[#f4f7fe] flex items-center justify-center text-blue-700 text-3xl'>{icon}</div>:null}
<div className='flex flex-col items-start justify-center '>
  <h2 className='text-sm text-gray-400 font-sans'>{title}</h2>
  {price?<span className='text-2xl font-bold text-custom_blue'>{price}</span>:null}
{tasks?  <span className='text-2xl font-bold text-custom_blue'>{tasks}</span>:null}
{desc?<p className='text-[12px]'><span className='font-semibold text-green-600'>+23%</span> since last month</p>:null}
</div>
    </div>
  )
}

export default StatField