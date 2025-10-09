import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SignUp() {
    return (
        <div className='py-10 pr-10 z-9 pb-28'>

            <div className='grid grid-cols-2 h-full'>
                <div className='h-[80vh]  relative'>
                    <Image className='object-cover relative' fill src="/shopping cart.png" alt="" />
                </div>

                <div className='px-40 py-20 flex flex-col gap-10'>
                    <div className="flex flex-col gap-4">

                        <h1 className='text-4xl font-semibold'>Create an Account</h1>
                        <h2 className='text-xl font-medium'>Enter your details below</h2>
                    </div>
                    <div className="input flex flex-col gap-8">
                        <input className='border-b-2 py-1 w-80 border-black focus:outline-white focus:outline-2' type="text" placeholder='Name' />
                        <input className='border-b-2 py-1 w-80 border-black focus:outline-white focus:outline-2' type="text" placeholder='Email or Phone Number' />
                        <input className='border-b-2 py-1 w-80 border-black focus:outline-white focus:outline-2' type="text" placeholder='Password' />

                        <div className="button flex flex-col w-full gap-4">

                            <button className='bg-[#EA4335] p-3 text-white font-semibold'>Create Account</button>
                            <button className=' flex text-center  gap-4 justify-center border border-black p-3 text-semibold'> <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={27}
                                height={27}
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="#EA4335"
                                    d="M24 9.5c3.94 0 6.63 1.7 8.16 3.12l5.97-5.84C34.9 3.08 29.88 1 24 1 14.88 1 7.06 6.64 3.7 14.5l6.98 5.42C12.1 13.24 17.49 9.5 24 9.5z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M46.5 24.5c0-1.54-.14-3.02-.4-4.5H24v9h12.7c-.55 2.96-2.21 5.46-4.7 7.15l7.27 5.64C43.56 37.7 46.5 31.6 46.5 24.5z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M10.68 28.33A14.5 14.5 0 0 1 9.5 24c0-1.5.27-2.94.76-4.26L3.3 14.32A22.93 22.93 0 0 0 1 24c0 3.63.87 7.06 2.38 10.09l7.3-5.76z"
                                />
                                <path
                                    fill="#4285F4"
                                    d="M24 47c6.3 0 11.58-2.07 15.44-5.64l-7.27-5.64c-2.04 1.37-4.68 2.18-8.17 2.18-6.51 0-11.9-3.74-13.32-9.32l-7.3 5.76C7.06 41.36 14.88 47 24 47z"
                                />
                            </svg>Sign Up with Google</button>
                        </div>
                    </div>

                    <div className="login flex gap-4 justify-center">
                        <p>Already have account?</p>
                        <Link href={"/Login"}><button className='hover:cursor-pointer underline underline-offset-8 decoration-gray-400'>Log in</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
