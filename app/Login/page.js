import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SignUp() {
    return (
        <div className='py-10 pr-10 z-9 pb-28'>

            <div className='grid grid-cols-2 h-full'>
                <div className=' h-[80vh]  relative'>
                    <Image className='object-cover relative' fill src="/shopping cart.png" alt="" />
                </div>

                <div className='px-40 py-20 flex flex-col gap-10'>
                    <div className="flex flex-col gap-4">

                        <h1 className='text-4xl font-semibold'>Log in to ByteBuy</h1>
                        <h2 className='text-xl font-medium'>Enter your details below</h2>
                    </div>
                    <div className="input flex flex-col gap-8">
                      
                        <input className='border-b-2 py-1 w-80 border-black focus:outline-white focus:outline-2' type="text" placeholder='Email or Phone Number' />
                        <input className='border-b-2 py-1 w-80 border-black focus:outline-white focus:outline-2' type="text" placeholder='Password' />

                        <div className="button flex  w-full gap-28 items-center">

                            <button className='bg-[#EA4335] px-7 py-2 rounded-md text-white font-semibold'>Log In</button>

                            <span className='text-red-500'>Forget Password?</span>
                          
                        </div>
                    </div>

                  
                </div>
            </div>
        </div>
    )
}

export default SignUp
