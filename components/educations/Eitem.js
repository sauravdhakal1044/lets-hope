import React, { useEffect, useState } from 'react'
import { IoMdSchool } from 'react-icons/io'
import { InView } from 'react-intersection-observer';

export default function Eitem({ value, className }) {

    const [inView, setInView] = React.useState(false);
    const [cName, setcName] = useState("full")
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
                    <div ref={ref} className={` gap-5  ${cName} flex justify-between opacity-${opacity} lg:relative`}>
                        <div className=''>
                            <div className=' lg:flex'>
                                <div className='flex gap-3'>
                                    <IoMdSchool className={`h-7 w-7 ${value.iconClassName}`} />
                                    <h2 className={` text-xl font-semibold ${value.iconClassName}`}>{value.title}</h2>
                                </div>

                            </div>
                            <div className='px-4 lg:px-0' >
                                <p className='text-gray-800 dark:text-white font-medium hover:text-[#ff0000] dark:hover:text-[#00ffff] text-xl py-2'>{value.name}
                                </p>
                                <p className='text-gray-800 dark:text-white py-2'>{value.description}</p>
                            </div>
                            <div className='py-2 lg:hidden'>
                                <img src={value.img} className=" w-[480px] object-b h-40 rounded-md" alt="" />
                            </div>
                            <div ref={ref} className='btns flex '>
                                <a rel='noreferrer' href={value.href} className="w-full" target={"_blank"}>
                                    <button className='text-white dark:text-white  pointer-events-auto w-full lg:w-56 lg:absolute lg:bottom-4 border h-10 rounded p-2 hoverBtn btn1 transition-colors duration-300 ease-in-out hover:text-gray-800 dark:hover:text-black border-gray-800 dark:border-white after:bg-slate-200 bg-slate-600 dark:bg-slate-700 dark:after:bg-[#00ffff]'>
                                        Visit
                                    </button>
                                </a>

                            </div>
                        </div>

                        <div className='hidden lg:block'>
                            <img src={value.img} className=" w-[480px] object-bottom h-56 rounded-md" alt="" />
                        </div>

                    </div>
                )}
            </InView>
        </>
    )
}
