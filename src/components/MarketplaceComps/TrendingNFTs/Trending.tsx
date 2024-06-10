import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'
import { nftsData } from '@/lib/marketplace/nftsData'

function Trending() {
  return (
    <div className='w-[54%] py-8 flex items-center justify-center gap-4 flex-col'>
        <h1 className='w-full flex items-center justify-center text-2xl text-custom_blue font-bold'>Trending NFTs</h1>
        <div className='w-full flex items-center justify-center gap-8  font-semibold text-blue-600'>
            <Link href="#">Art</Link>
            <Link href="#">Music</Link>
            <Link href="#">Sports</Link>
            <Link href="#">Collectibles</Link>
      </div>
        <div className='w-full flex items-center justify-between flex-wrap'>
          {nftsData && nftsData.length>0?nftsData.filter(data=>data.category=="trending").map((data:any,i:number)=>{
            return   <div className='w-[30%] min-h-[400px] bg-white rounded-xl flex items-center justify-center flex-col gap-4 p-4 ' key={i}>
            <img src={data.image} className='w-full h-[5rem] object-cover rounded-lg' />
            <div className='font-bold text-custom_blue text-md text-center'>{data.title}</div>
            <p className='text-gray-400 font-medium'>By {data.user}</p>
            <div className=' w-full flex relative justify-center items-center'>
            <img src={data.contributers[0]} className='w-[2rem] h-[2rem] object-cover rounded-full ' style={{border: '2px solid white'}} />
                <img src={data.contributers[1]} className='w-[2rem] h-[2rem] object-cover rounded-full relative right-4' style={{border: '2px solid white'}} />
                <img src={data.contributers[2]} className='w-[2rem] h-[2rem] object-cover rounded-full relative right-8 z-10' style={{border: '2px solid white'}} />
                   <div className='w-[2rem] h-[2rem] bg-gray-300 flex items-center justify-center rounded-full text-[12px] font-thin text-blue-600 relative right-10 '>3+</div> 
            </div>
            <div className='font-semibold text-blue-600'>Current Bid: 0.91 ETH</div>
            <Button className='px-6 py-2 flex items-center justify-center rounded-3xl bg-blue-900 text-white'>Place Bid</Button>
        </div>
          }):null}
        </div>
    </div>
  )
}

export default Trending