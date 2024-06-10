import React from 'react'

function ProfileCard() {
  return (
<div className='w-[25vw] bg-white min-h-[400px] rounded-lg  flex items-center justify-center flex-col gap-4'>
<div className='w-[90%] h-[9rem] nft-discover rounded-xl bg-black relative flex justify-center'>
<img src='https://images.unsplash.com/photo-1706824281378-6af72fc630df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwcmdifGVufDB8fDB8fHww' className='w-[5rem] h-[5rem] rounded-full absolute bottom-[-2rem] object-cover' style={{border:"3px solid #fff"}}/>

</div>
<div className='w-full h-[40%] flex items-center justify-center flex-col gap-1  mt-12'>
    <h2 className='text-xl text-custom_blue font-bold font-sans'>Adela Parkson</h2>
    <p className='text-gray-400'>Product Designer</p>
</div>

<div className='w-full flex items-center justify-between px-8'>
<div className='flex flex-col items-center justify-center gap-2'>
    <h1 className='text-custom_blue font-bold text-2xl font-sans'>17</h1>
    <p className='text-gray-400 text-sm'>Posts</p>
</div>
<div className='flex flex-col items-center justify-center gap-2'>
    <h1 className='text-custom_blue font-bold text-2xl font-sans'>9.7K</h1>
    <p className='text-gray-400 text-sm'>Followers</p>
</div>
<div className='flex flex-col items-center justify-center gap-2'>
    <h1 className='text-custom_blue font-bold text-2xl font-sans'>274</h1>
    <p className='text-gray-400 text-sm'>Following</p>
</div>


</div>
        </div>
  )
}

export default ProfileCard