"use client"
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Sidebar from '../Sidebar/Sidebar'
 
export default function SideBarContext() {
const pathname=usePathname()
if(pathname=="/signin")return
 
  return (
    <div className='w-[20vw] relative min-h-screen'>
    <Sidebar/>    
        </div>  

  )
}