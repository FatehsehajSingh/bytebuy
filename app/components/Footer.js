import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

import { LuSendHorizontal } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


function Footer() {
    return (
        <div className='h-80 bg-gray-900 text-white px-30 p-10 flex justify-center gap-x-20 items-start bottom-0'>

            <div className="col-1 flex flex-col gap-4 w-1/4">
              <Link href={"/"}> <div className="logo font-bold text-2xl">ByteBuy</div></Link> 
               <span className='text-lg  font-semibold'> Subscribe</span>
                <div className="input flex flex-col gap-3">
                    Get 10% off your first order
                    <div className="relative input flex">

                    <input className='border-2 w-56 text-gray-400 border-gray-200 px-4 py-2' type="text" name="" id="" placeholder='Enter your email'/>
                    <LuSendHorizontal className='absolute left-48 top-2' size={25} />
                    </div>
                </div>
            </div>

            <div className="col-1 flex flex-col gap-4 w-1/4">
            <h2 className='text-lg  font-semibold'>Support</h2>
            
            <div className='text-sm'>
            <div className='text-md'>111 Bijoy sarani,Dhaka,</div>
            <div className='text-md'>Dh 1515,Bangladesh. </div>
            </div>
            
            <div className='flex flex-col gap-2'>
            <div>
                ByteBuy@gmail.com
            </div>
            <div>
                +918-374-938-478
            </div>
            </div>

            </div>

            <div className="col-1 flex flex-col gap-4 w-1/4">
                <h2 className='text-lg  font-semibold'>Account</h2>
                <ul className='flex flex-col gap-2'>
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
            </div>

            <div className="col-1 flex flex-col gap-4 w-1/4">
                <h2 className='text-lg  font-semibold'>Quick LInk</h2>
                  <ul className='flex flex-col gap-2'>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="col-1 flex flex-col gap-4 w-1/4">
                  <h2 className="text-2xl font-semibold">Download App</h2>
      <p className="text-gray-300 text-sm">Save $3 with App New User Only</p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Image
          src="/qr-code.png"
          alt="QR Code"
          className="rounded-md"
          width={100}
                height={100}
          
        />
        <div className="flex flex-col gap-3">
          <a href="#" className="w-20">
            <Image
              src="/google-play-badge.png"
              alt="Google Play"
              className="w-full"
              width={100}
                height={100}
            />
          </a>
          <a href="#" className="w-20">
            <Image
              src="/app-store-badge.png"
              alt="App Store"
              className="w-full"
              width={100}
                height={100}
            />
          </a>
        </div>
      </div>

      <div className="flex space-x-6 text-xl pt-4">
        <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
        <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
        <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
        <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
      </div>
            </div>

        </div>
    )
}

export default Footer
