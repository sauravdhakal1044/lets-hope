import React from 'react'

function ForMobile() {

    const animateFunc = (e) => {
        e.target.classList.add("rubberBand")
    }

    const endAnimate = (e) => {
        e.target.classList.remove("rubberBand")
    }

    return (
        <>
            <div className='relative h-20 lg:hidden'>
                <p className='absolute text-border opacity-25 dark:opacity-25 font-sans text-6xl -mt-4 mx-auto w-full text-center ml-4   transition-all duration-300 ease-in-out '>My Skills</p>
                <div className='absolute z-30 w-full my-6'>

                    <div className='flex  items-center justify-center mr-10'>
                        <p className='text-gray-800 dark:text-white  transition-all duration-300 ease-in-out text-5xl font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>M</p>
                        <p className=' text-gray-800 dark:text-white  transition-all duration-300 ease-in-out text-5xl font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>y</p>
                        <p className=' text-gray-800 dark:text-white  transition-all duration-300 ease-in-out text-5xl font-sans dark:hover:text-[#00FFFF] ml-5' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>S</p>
                        <p className=' text-gray-800 dark:text-white  transition-all duration-300 ease-in-out text-5xl font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>k</p>
                        <p className=' text-gray-800 dark:text-white  transition-all duration-300 ease-in-out text-5xl font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>i</p>
                        <p className=' text-gray-800 dark:text-white  transition-all duration-300 ease-in-out text-5xl font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>l</p>
                        <p className=' text-gray-800 dark:text-white  transition-all duration-300 ease-in-out text-5xl font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>l</p>
                        <p className=' text-gray-800 dark:text-white  transition-all duration-300 ease-in-out text-5xl font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>s</p>              
                    </div>
                
                </div>
               
            </div>

        </>
    )
}

export default ForMobile