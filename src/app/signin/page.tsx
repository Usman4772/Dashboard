"use client"
import { Button } from 'antd'
import { IoIosArrowBack } from "react-icons/io";
import {Checkbox} from 'antd';
import Link from 'next/link';
import { HiMoon } from "react-icons/hi";
function SignIn() {
  return (
    <div className='w-screen flex items-start  justify-between bg-white'>
<div className='w-[50%] flex items-start px-8  justify-center flex-col gap-4 py-8'>
  <Link className='flex items-center justify-center gap-4 rounded-3xl bg-transparent border-none outline-none text-gray-500' href="/"><IoIosArrowBack/><span>Dashboard</span></Link>
  <div className='w-full flex  gap-8 flex-col py-8  relative after:absolute after:content-[""] after:w-full after:h-[1px] after:bg-gray-400 after:bottom-0'>
<div className='w-full flex items-start justify-center gap-2 flex-col '>
<h1 className='text-4xl text-custom_blue font-bold'>Sign In</h1>
    <p className='text-gray-400 text-md'>Enter your email and password to signin!</p>
</div>
<Button className='flex items-center justify-center gap-2 h-[3rem] rounded-xl bg-[#ecffe0]'><img src='https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png' className='w-[1.1rem] h-[1.1rem]'/> <span>Sign In with Google</span></Button>
  </div>
  <div className='w-full flex flex-col items-center justify-start gap-4'>
<div className='flex w-full items-start flex-col justify-center gap-2'>
  <label className='text-custom_blue font-sans font-semibold'>Email*</label>
  <input type='email' className='w-full h-[3rem] px-4 rounded-lg text-gray-500 border border-gray-300' placeholder='mail@gmail.com '/>
</div>
<div className='flex w-full items-start flex-col justify-center gap-2'>
  <label className='text-custom_blue font-sans font-semibold'>Password*</label>
  <input type='password' className='w-full h-[3rem] px-4 rounded-lg text-gray-500 border border-gray-300' placeholder='Min 8 characters '/>
</div>
<div className='w-full flex items-center justify-between px-4'>
  <div> <Checkbox  className='text-custom_blue'>Keep me logged in</Checkbox></div>
  <Link href="#" className='text-blue-800 font-semibold font-sans text-sm'> Fogot your password ?</Link>
</div>
  </div>
 <div className='w-full flex items-center justify-center'> <Button className='px-52 mt-4 h-[3rem] bg-blue-800 text-white font-semibold rounded-xl'>Sign In</Button></div>
 <div className='text-custom_blue '>Not registered yet? <Link href="#" className='text-blue-800 font-semibold'>Create an account</Link></div>
</div>
<div className='nft-discover w-[50%] h-[83%] flex items-center justify-center gap-8 flex-col' style={{borderBottomLeftRadius:"10rem"}}>
  <div className='w-[12rem] h-[12rem] bg-white rounded-full flex items-center justify-center'><HiMoon className='text-blue-800 text-[6rem]  moon' /></div>
  <h1 className='text-4xl text-white font-bold py-4'>Horizon</h1>
  <Button  className='px-20 py-12 bg-transparent rounded-xl flex items-center justify-center flex-col gap-2 hover:text-black cursor-default ' ghost={true}>
    <p className='text-gray-300'>Learn more about Horizon UI on</p> 
    <h2 className='font-bold text-whtie text-xl text-white '>horizon-ui.com</h2>
  </Button>
  
</div>

    </div>
  )
}

export default SignIn