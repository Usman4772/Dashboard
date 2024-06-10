import React from 'react'
import { Button } from 'antd'
import { nftsData } from '@/lib/marketplace/nftsData'
nftsData
function History() {
  return (
    <div className='w-[32vw] h-[500px] bg-white rounded-lg flex justify-start items-center gap-4 p-8 flex-col'>
<div className='w-full flex justify-between items-center  '>
    <h2 className='text-xl text-custom_blue font-bold'>History</h2>
    <Button className='px-4 py-2 rounded-3xl flex items-center justify-center'>See all</Button>  
</div>
<div className='flex flex-col gap-4'>
    {nftsData && nftsData.length>0?nftsData.slice(2,6).map((data:any,i:number)=>{
        return <div className='w-full h-[5rem]  flex justify-between items-center  rounded-lg' key={i}>
        <div className='flex items-center gap-4'>
            <img src={data.image} className='w-[4rem] h-[4rem] rounded-lg'/>
            <div className='flex flex-col gap-1 px-2 mr-2'>
                <h2 className='font-semibold text-custom_blue text-md '>{data.title}</h2>
                <p className='text-gray-400'>description</p>
            </div>
        </div>
        <div className='flex gap-2'>
            <div className='text-md text-custom_blue font-bold'>{data.currentBid} ETH</div>
            <h2 className='text-sm font-semibold text-gray-300'>{data.posted} ago</h2>
        </div>
    </div>
    }):null}
</div>
    </div>
  )
}

export default History