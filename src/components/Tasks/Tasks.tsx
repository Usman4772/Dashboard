"use client"
import { Checkbox } from 'antd';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RxDragHandleDots2 } from "react-icons/rx";
function Tasks() {
  const titles=["Landing page design","Dashboard Builder","Mobile App design","Illustration","Promotional LP"]
  return (
    <div className="w-[15vw] min-h-[525px] bg-white rounded-lg flex items-center justify-start flex-col py-8 px-4 gap-8">
<div className="w-full flex justify-between items-center ">
<Checkbox checked={true}></Checkbox>
Tasks
<HiOutlineDotsHorizontal className='cursor-pointer text-xl'/>
</div>
{
  titles.map((title,index)=>{
    return <div className='w-full flex justify-center   items-center gap-8' key={index}>
    <Checkbox ></Checkbox>

    <h2 className='text-[12px] font-bold text-custom_blue'>{title}</h2>
    <RxDragHandleDots2 className='text-3xl cursor-pointer text-gray-400'/>
  </div>
  })
}
    </div>
  )
}

export default Tasks