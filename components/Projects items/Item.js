import React from 'react'

export default function Item({ value }) {

    return (
        <>
            <div className='w-full lg:h-[285px] px-1 lg:flex justify-between py-5'>
                <div className=' lg:w-96 lg:relative'>
                    <div className='py-5'>
                        <p className='text-xl lg:text-3xl text-gray-900 dark:text-white dark:hover:text-[#00ffff] font-sans'>{value.name}</p>
                    </div>
                    <div className='px-1'>
                        <div>
                            <p className=' text-gray-800 dark:text-white dark:hover:text-[#00ffff] font-sans'>{value.abstract}</p>
                        </div>
                        <div className='block py-2 lg:hidden'>
                            <img src={value.img} className="  rounded-md" alt="" />
                        </div>
                        <div className='btns grid grid-cols-2 pr-2 my-4 lg:my-0 lg:absolute lg:bottom-2'>

                            <a rel='noreferrer' target={"_blank"} href={value.href}>
                                <button className='text-white dark:text-white  pointer-events-auto w-full lg:w-36 border h-10 rounded p-2 hoverBtn btn1 transition-colors duration-300 ease-in-out hover:text-gray-800 dark:hover:text-black border-gray-800 dark:border-white after:bg-slate-200 bg-slate-600 dark:bg-slate-700 dark:after:bg-[#00ffff]'>
                                    Visit
                                </button>
                            </a>
                            <a rel='noreferrer' target={"_blank"} href={value.href}>
                                <button className='text-gray-800 dark:text-gray-800  pointer-events-auto w-full lg:w-36  border h-10 rounded p-2 ml-2 hoverBtn btn1 transition-colors duration-300 ease-in-out hover:text-white dark:hover:text-black border-gray-800 dark:border-white after:bg-gray-700 bg-slate-200 dark:after:bg-[#00ffff]'>
                                    Github
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
                <div className='hidden lg:block'>
                    <img src={value.img} className=" w-[480px] rounded-md" alt="" />
                </div>
            </div>
        </>
    )
}
