import React, { useEffect, useState } from 'react'
import { InView } from 'react-intersection-observer'

export default function PItem({ value, className }) {

    const [inView, setInView] = React.useState(false);
    const [cName, setcName] = useState(className)
    const [opacity, setopacity] = useState(0)

    useEffect(() => {

        if (inView) {
            setopacity(100)
            setcName("slideOutRight")
        }

    }, [inView])

    return (
        <>
            <InView onChange={setInView}>
                {({ ref, inView }) => (
                    <div id={`${value?.name}`} className={`w-full flex justify-between opacity-${opacity} py-5 ${cName} lg:h-[296px] px-2`}>
                        <div className=' lg:w-96 lg:relative'>
                            <div ref={ref} className='pt-2 pb-5'>
                                <p className='text-2xl lg:text-3xl text-gray-900 dark:text-white dark:hover:text-[#00ffff] font-sans'>{value?.name}</p>
                            </div>
                            <div className=' px-1'>
                                <div >
                                    <p className=' text-gray-800 dark:text-white dark:hover:text-[#00ffff] font-sans'>{value?.abstract}</p>
                                </div>
                                <div className='py-2'>
                                    <p className='lg:text-xl text-gray-900 dark:text-white dark:hover:text-[#00ffff] font-sans'>Tech Used:</p>
                                    <p className=' text-gray-800 dark:text-white dark:hover:text-[#00ffff] font-sans'>{value?.techUsed}</p>
                                </div>
                                <div className='items-center place-self-center py-2 lg:hidden'>
                                    <img src={value?.img} className=" w-[480px] rounded-md" alt="" />
                                </div>
                                <div  className='btns grid grid-cols-2  lg:absolute lg:bottom-2 my-2 pr-2'>

                                    
                                    <a rel='noreferrer' target={"_blank"} href={value?.href}>
                                        <button className='text-white dark:text-white  pointer-events-auto lg:w-40 w-full  border h-10 rounded p-2 hoverBtn btn1 transition-colors duration-300 ease-in-out hover:text-gray-800 dark:hover:text-black border-gray-800 dark:border-white after:bg-slate-200 bg-slate-600 dark:bg-slate-700 dark:after:bg-[#00ffff]'>
                                            Visit
                                        </button>
                                    </a>
                                    <a rel='noreferrer' target={"_blank"} href={value?.href}>
                                        <button className='text-gray-800 dark:text-gray-800  pointer-events-auto lg:w-40 w-full  border h-10 rounded p-2 ml-2 hoverBtn btn1 transition-colors duration-300 ease-in-out hover:text-white dark:hover:text-black border-gray-800 dark:border-white after:bg-gray-700 bg-slate-200 dark:after:bg-[#00ffff]'>
                                            Github
                                        </button>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='items-center place-self-center hidden lg:block'>
                            <img src={value?.img} className=" w-[480px] rounded-md" alt="" />
                        </div>
                    </div>
                )}
            </InView>
        </>
    )
}
