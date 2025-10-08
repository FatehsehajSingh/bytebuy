import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";

function Footer() {
    return (
        <div className='h-80 bg-gray-900 text-white px-30 p-10 justify-center items-center'>

            <div className="col-1 flex flex-col gap-4 w-1/4">
                <div className="logo font-bold text-2xl">ByteBuy</div>
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

            </div>

            <div className="col-1 flex flex-col gap-4 w-1/4">

            </div>

            <div className="col-1 flex flex-col gap-4 w-1/4">

            </div>

            <div className="col-1 flex flex-col gap-4 w-1/4">

            </div>

        </div>
    )
}

export default Footer
