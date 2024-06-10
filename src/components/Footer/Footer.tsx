import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='w-full  bg-transparent flex items-center justify-between p-8 text-gray-400'>
        <div>©2024 Horizon UI.All Rights Reserverd</div>
        <Link href="/">Support</Link>
        <Link href="/">Liscense</Link>
        <Link href="/">Terms of Use</Link>
        <Link href="/">Blog</Link>
    </div>
  )
}

export default Footer