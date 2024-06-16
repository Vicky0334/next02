import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=" w-full h-[60px] flex items-center justify-end gap-6 p-9 bg-red-200">
       
        <Link href="/">Home</Link>
        <Link href="/aboute">aboute</Link>
        <Link href="/courses">Courses</Link>
    </div>
  )
}

export default Navbar
