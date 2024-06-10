import SearchBar from '../Search/Search'
import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
import { IoIosColorPalette } from "react-icons/io";
import {Popover} from "antd"
import { LiaUploadSolid } from "react-icons/lia";
import Link from 'next/link';
function Nav({page}:any) {
  const notificationContent = (
    <div className='w-[400px] h-[300px] bg-white rounded-lg flex items-center justify-center gap-8 flex-col '>
      <div className='w-full flex items-center justify-between px-4'>
        <h2>Notifications</h2>
        <button>Mark as all read</button>
      </div>
     <div className='w-full flex items-center justify-between px-4 '>
     <div className='w-[3rem] h-[3rem] bg-custom_blue rounded-xl flex items-center justify-center '>
<LiaUploadSolid className='text-white text-xl'/>
      
     </div>
      <div className='flex flex-col gap-2'>
        <h3 className='font-semibold text-[16px]'>New Update : Horizon UI Dashboard PRO</h3>
        <p>A new update for your download item is available</p>
      </div>
     </div>
     <div className='w-full flex items-center justify-between px-4 '>
     <div className='w-[3rem] h-[3rem] bg-custom_blue rounded-xl flex items-center justify-center '>
<LiaUploadSolid className='text-white text-xl'/>
      
     </div>
      <div className='flex flex-col gap-2'>
        <h3 className='font-semibold text-[16px]'>New Update : Horizon UI Dashboard PRO</h3>
        <p>A new update for your download item is available</p>
      </div>
     </div>

     <div></div>
    </div>
  );
  
  return (
    <div className='w-[79.4vw] flex items-center justify-between px-4 fixed top-4 right-1 z-50 '>
        <nav className='w-full  rounded-lg  flex items-center justify-between px-4 nav-container py-4 '>
        <div>
<div className='text-custom_blue text-sm'> Pages / {page}</div>
<h1 className='text-4xl font-bold font-sans text-custom_blue'>{page}</h1>
        </div>
<div className='flex items-center justify-center gap-4 bg-white px-4 py-4 rounded-full ' style={{boxShadow:"0 0 10px #F4F8FE"}}>
    <SearchBar/>
    <Popover content={notificationContent}  trigger="click" >
    <IoNotificationsOutline className='text-gray-400 cursor-pointer'/>
    </Popover>
    <GoInfo className='text-gray-400 cursor-pointer'/>
    <IoIosColorPalette className='text-gray-400 cursor-pointer'/>
    <button className='w-[2rem] h-[2rem] rounded-full bg-blue-800 text-white font-semibold text-sm flex items-center justify-center'>NF</button>
</div>
</nav>
    </div>
  )
}

export default Nav