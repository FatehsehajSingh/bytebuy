"use client"
import React from 'react'
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
    return (
        <div className='bg-white text-black h-20 flex justify-between py-7 px-10 items-start z-10  border-b-2 border-gray-300 sticky top-0'>
              <Link href={"/"}> <div className="logo font-bold text-2xl">ByteBuy</div></Link> 
            <ul className='flex gap-10 text-lg'>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <Link href={"/SignUp"}><li>Sign Up</li></Link>
            </ul>
            <div className="searchbar flex gap-7 mx-5">
                <div className="search flex relative le-0">

                <input className='bg-gray-100 px-4 rounded-sm py-2 w-56 text-sm' type="text" placeholder='What are you looking for?' />
                <CiSearch size={20} className='absolute right-2 top-2' />
                </div>
                <CiHeart size={33}  className=''/>
              <IoCartOutline size={33} />
            </div>
        </div>
    )
}

export default Navbar
