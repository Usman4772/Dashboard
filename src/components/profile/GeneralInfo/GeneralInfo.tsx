function GeneralInfo() {
  return (
    <div className="w-[48%] h-[618px] bg-white rounded-lg p-8">
 <div className='w-full flex items-start justify-center flex-col gap-4'>
            <h2 className='text-2xl text-custom_blue font-bold font-sans '>General Information</h2>
            <p className='text-gray-400 text-md'>As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all...</p>
        </div>
        <div className="w-full py-8 flex items-center justify-center flex-col gap-12">
<div className="w-full flex items-center justify-between px-4">
<div className="flex flex-col gap-1 text-start">
    <p className="text-gray-400 text-md">Education</p>
    <h3 className="text-custom_blue font-semibold">Stanford University</h3>
</div>
<div className="flex flex-col gap-1 text-start w-[40%] ">
    <p className="text-gray-400 text-md">Languages</p>
    <h3 className="text-custom_blue font-semibold">English , Spanish , Italian</h3>
</div>
</div>

<div className="w-full flex items-center justify-between px-4">
<div className="flex flex-col gap-1 text-start">
    <p className="text-gray-400 text-md">Department</p>
    <h3 className="text-custom_blue font-semibold">Product Design</h3>
</div>
<div className="flex flex-col gap-1 text-start w-[40%] ">
    <p className="text-gray-400 text-md">Work History</p>
    <h3 className="text-custom_blue font-semibold">Google , Facebook</h3>
</div>
</div>

<div className="w-full flex items-center justify-between px-4">
<div className="flex flex-col gap-1 text-start">
    <p className="text-gray-400 text-md">Organization</p>
    <h3 className="text-custom_blue font-semibold">Rev 9 Solutions</h3>
</div>
<div className="flex flex-col gap-1 text-start w-[40%] ">
    <p className="text-gray-400 text-md">Birthday</p>
    <h3 className="text-custom_blue font-semibold">23 March 2004</h3>
</div>
</div>



        </div>
    </div>
  )
}

export default GeneralInfo