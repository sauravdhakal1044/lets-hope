import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export default function Footer() {
    return (
        <>
            <div className='items-center justify-center text-gray-800 dark:text-white  font-sans flex gap-x-2 py-2 border-t dark:border-[#00ffff] border-red-800'>
                <AiOutlineCopyrightCircle />
                <p className='text-gray-800 dark:text-white  font-sans flex'>
                    <span className='dark:text-[#00ffff] text-[#ff0000]  mr-2'> Sisir Dhakal</span> - All rights reserved
                </p>
            </div>
        </>
    )
}
