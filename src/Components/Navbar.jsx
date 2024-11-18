import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const navbar = () => {
  return (
    <template className='h-16 bg-white w-full flex items-center justify-between fixed top-0 left-0'>
           <div className='text-xl font-bold ml-[31vh]'>BrandName</div>   {/* Logo */}
           {/* Navbar for the items in the center */}
            <nav className='space-x-6 -ml-20 text-lg font-semibold font-sans text-[#777b89] flex items-center justify-center'>
              <a href="/home" className='hover:text-indigo-400 font-neutral-400 text-sm'>Home</a>
              <a href="/shop" className='hover:text-indigo-400 font-neutral-400 text-sm flex items-center gap-1'>Shop <MdKeyboardArrowDown /></a>
              <a href="/about" className='hover:text-indigo-400 font-neutral-400 text-sm'>About</a>
              <a href="/blog" className='hover:text-indigo-400 font-neutral-400 text-sm'>Blog</a>
              <a href="/contact" className='hover:text-indigo-400 font-neutral-400 text-sm'>Contact</a>
              <a href="/pages" className='hover:text-indigo-400 font-neutral-400 text-sm'>Pages</a>
            </nav>
            {/* Navbar for the right aligned items*/}
            <nav className='space-x-6 mr-[240px] text-[#23a6f0] flex items-center '>
              <a href="/login" className='flex items-center gap-1'><FaRegUser /> Login / Register </a>
              <a href="/login" ><IoSearchOutline /></a>
              <a href="/login" className='flex items-center'><BsCart /> 1</a>
              <a href="/login" className='flex items-center'><CiHeart />1</a>
            </nav>
    </template>
  )
}

export default navbar