import { HiPencil } from "react-icons/hi2";
function Projects() {
  return (
    <div className='w-[48%] min-h-[400px] bg-white rounded-lg p-8'>
        <div className='w-full flex items-start justify-center flex-col gap-4'>
            <h2 className='text-2xl text-custom_blue font-bold font-sans '>All projects</h2>
            <p className='text-gray-400 text-md'>Here you can find more details aboutyour projects . Keep your user engaged by providing meaningful information.</p>
        </div>
       <div className='w-full py-8 flex items-center justify-center gap-4 flex-col '>
       <div className='w-full flex items-center justify-between px-4 h-[7rem] '>
            <div className="flex items-center justify-center gap-4">      
                  <img src="https://plus.unsplash.com/premium_photo-1682145767950-d3c0e9e1b091?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaCUyMGJsdWV8ZW58MHx8MHx8fDA%3D" className="w-[5rem] h-[5rem] rounded-lg object-cover"/>
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-md text-custom_blue">Technology behind the Blockchain </h3>
               <p className="text-gray-400 ">Project #2 . <span className="text-blue-800 font-semibold cursor-pointer">See project details</span></p>
            </div>
            </div>

            <HiPencil className="text-gray-500 cursor-pointer"/>
        </div>
        <div className='w-full flex items-center justify-between px-4 h-[7rem] '>
            <div className="flex items-center justify-center gap-4">      
                  <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaCUyMGltYWdlfGVufDB8fDB8fHww" className="w-[5rem] h-[5rem] rounded-lg object-cover"/>
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-md text-custom_blue">Greatest way to good Economy </h3>
               <p className="text-gray-400 ">Project #2 . <span className="text-blue-800 font-semibold cursor-pointer">See project details</span></p>
            </div>
            </div>

            <HiPencil className="text-gray-500 cursor-pointer"/>
        </div>
        <div className='w-full flex items-center justify-between px-4 h-[7rem] '>
            <div className="flex items-center justify-center gap-4">      
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaCUyMGltYWdlfGVufDB8fDB8fHww" className="w-[5rem] h-[5rem] rounded-lg object-cover"/>
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-md text-custom_blue">Most essential tips for Burnout</h3>
               <p className="text-gray-400 ">Project #3 . <span className="text-blue-800 font-semibold cursor-pointer">See project details</span></p>
            </div>
            </div>

            <HiPencil className="text-gray-500 cursor-pointer"/>
        </div>
        </div> 
    </div>
  )
}

export default Projects