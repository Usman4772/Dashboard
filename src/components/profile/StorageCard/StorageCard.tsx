import { MdOutlineCloudDone } from "react-icons/md";

function StorageCard() {
  return (
    <div className='w-[20vw] min-h-[400px] bg-white rounded-lg flex items-center justify-center flex-col gap-4'>
        <div className='w-[7rem] h-[7rem] bg-blue-50 rounded-full flex items-center justify-center'>
            <MdOutlineCloudDone className="text-blue-600 text-5xl font-bold"/>
        </div>
        <h2 className='font-bold text-custom_blue text-xl'>Your Storage</h2>
        <p className='text-gray-400 text-sm w-full text-center'>Supervise your drive <br/> space in the easiest way</p>
        <div className='w-full flex items-center justify-between px-8 text-gray-400 text-md'>
            <div>25.6 GB</div>
            <div>50 GB</div>
        </div>
        <div className='w-[10rem] h-[1rem] bg-[#4759cf] rounded-3xl'></div>
    </div>
  )
}

export default StorageCard