import React from 'react'
import { Button } from 'antd'
import { creatersData } from '@/lib/marketplace/creatersData'
import {Progress} from 'antd'
function Creaters() {
  return (
    <div className='w-[32vw] min-h-[450px] bg-white rounded-lg py-8  gap-6 flex items-center justify-start flex-col px-4'>
        <div className='w-full flex items-center justify-between px-4 h-[10%] '>
            <h2 className='text-xl font-semibold text-custom_blue'>Top Creaters</h2>
            <Button className='rounded-3xl'>See all</Button>
        </div>
        <div className=' w-full h-[350px]  flex flex-col gap-4'>
            <div className='w-full flex items-cetner justify-between px-4 text-gray-400 font-semibold text-[14px] font-sans py-4'>
                <h2>NAME</h2>
                <div className='flex gap-8'>
                    <h2>ARTWORKS</h2>
                    <h2>RATING</h2>
                </div>
            </div>
  {creatersData && creatersData.length>0?creatersData.slice(0,5).map((user:any,i:number)=>{
    
    return   <div className='w-full h-[50px] flex items-center justify-between px-4 '>
    <div className='flex items-center justify-start gap-2 w-[50%] '>
        <img src={user.image} className='w-[2rem] h-[2rem] rounded-full object-cover'/>
        <h2 className='font-semibold text-custom_blue'>{user.email}</h2>
    </div>
    <div className='text-gray-400 font-medium w-[20%] flex items-center justify-center '>{user.artwork}</div>
    <div className='w-[20%]'><Progress percent={user.rating} strokeColor="#4c6ef5" className='w-full' /></div>
        </div>
  }):null}
        </div>
    </div>
  )
}

export default Creaters