"use client"
import { IoMdHome } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { BiSolidLock } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";


const sideBarContent=[
    {
        icon:<IoMdHome/>,
        title:"Main Dashboard",
    },
    {
        icon:<MdShoppingCart/>,
        title:"NFT Marketplace",
        href:"/marketplace"
    },
    {
        icon:<IoIosStats/>,
        title:"Data Tables",
        href:"/data-tables"
    },
    {
        icon:<IoMdPerson/>,
        title:"Profile",
        href:"/profile"
    },
    {
        icon:<BiSolidLock/>,
        title:"Sign In",
        href:"/signin"
    },
    // {
    //     icon:<RiAdminFill/>,
    //     title:"RTL Admin",
    // }
]

function Sidebar() {
    const [currentIndex,setCurrentIndex]=useState<number>(0)
  return (
    <div className='w-[20vw] sticky top-0 left-0 h-screen   bg-white flex items-center justify-start gap-8 flex-col'>
        <h1 className=' w-full justify-center items-center flex gap-4 font-normal h-[20%]  text-[#1B254B] text-2xl border border-b-gray-400'><span className='font-bold'>HORIZON</span>FREE</h1>
        <div className='w-full flex items-center justify-center gap-8 flex-col'>
{sideBarContent.map((item,i)=>{
    return<Link href={item.href?item.href:"/"} className="w-full flex justify-start items-center gap-8 px-8" key={i} onClick={()=>{setCurrentIndex(i)}}>
<span className={currentIndex==i?"font-semibold text-[#5d4bff] text-xl":"font-semibold text-gray-400"}>{item.icon}</span>
<h2 className={currentIndex==i?"font-semibold text-[#1B254B]":"font-semibold text-gray-400"}>{item.title}</h2>
</Link>
})}
        </div>
       
    </div>
  )
}

export default Sidebar