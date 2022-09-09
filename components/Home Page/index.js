import React, { useEffect, useRef } from 'react'
import Accounts from '../SocialAccounts'
import { BsArrowDown } from 'react-icons/bs'

function HomePage() {

    const domItem = useRef(null)

    const animateFunc = (e) => {
        e.target.classList.remove("bounceIn")
        e.target.classList.add("rubberBand")
    }
    const endAnimate = (e) => {
        e.target.classList.remove("rubberBand")
    }


    useEffect(() => {
        if (domItem.current) {
            setTimeout(() => {
                if (domItem.current) {
                    const text = "Hi, I'm Sisir , Full-Stack developer"
                    const splittext = text.split("")
                    // domItem.current.innerText = ""
                    domItem.current?.classList.remove("hidden")
                    for (let i = 0; i < splittext.length; i++) {
                        if (domItem.current) {

                            if (i === 3 || i === 16) {
                                domItem.current.innerHTML += "<br>"
                            }
                            if (i === 7 || i === 27) { domItem.current.innerHTML += `<span class='added text-gray-900 dark:text-white dark:hover:text-[#00ffff] ml-3 lg:ml-6 lg:text-4xl md:text-5xl'  >` + splittext[i] + "</span>" }
                            else {
                                domItem.current.innerHTML += `<span class='added text-gray-900 dark:text-white dark:hover:text-[#00ffff] md:text-5xl lg:text-4xl'  >` + splittext[i] + "</span>"
                            }
                        }
                    }
                    let count = 0;
                    let timer = setInterval(animateLetter, 50)

                    function animateLetter() {
                        const span = domItem.current?.querySelectorAll("span")[count]
                        span?.classList.add("fade");
                        span?.classList.add("bounceIn");
                        span?.addEventListener("mouseenter", animateFunc)
                        span?.addEventListener("animationend", endAnimate)
                        count++
                        if (count === splittext.length) {
                            funcComplete()
                            return
                        }
                    }
                    function funcComplete() {
                        clearInterval(timer)
                        timer = null
                    }
                }
            }, 800);
        }
    }, [])

    useEffect(() => {
        try {
            canvas = null;
        } catch (e) { }
    }, []);

    return (
        <>
            <div className='relative h-screen w-screen '>
                {/* <Navbar/> */}
                <div
                    className="h-full bg w-full dark:block absolute bg-center bg-no-repeat bg-cover transition"
                    style={{ backgroundImage: `url(./assets/images/bg-dark.webp)` }}
                ></div>
                <div
                    className="h-full bg w-full dark:hidden absolute bg-center bg-no-repeat bg-cover transition"
                    style={{ backgroundImage: `url(./assets/images/bg-light.webp)` }}
                ></div>
                <canvas className="h-full w-full absolute" id="liquid-canvas"></canvas>
                <div className='absolute h-full w-full py-20 lg:py-0 flex justify-center items-center'>

                    <div className='relative htmlTags lg:w-[60%] py-4 lg:py-10  lg:mx-auto pointer-events-none'>
                        <div className='lg:pt-10 lg:mt-10'>
                            <p className=' text-border dark:text-border-light opacity-60 dark:opacity-60 font-sans text-3xl md:text-5xl lg:text-6xl lg:ml-10 -mt-8 text-center'>Welcome, To My World</p>
                        </div>
                        <p className=' text-slate-400 mt-4  -ml-1 mb-2 lg:ml-0'>{"<html>"}</p>
                        <p className=' text-slate-400  lg:ml-4 lg:mt-1'>{"<body>"}</p>
                        <p className=' text-slate-400  ml-2 lg:ml-6'>{"<h1>"}</p>
                        <div className='my-3 lg:h-44 lg:w-[80%] mx-auto pointer-events-auto   items-center relative ' >

                            <div ref={domItem} className=" lg:absolute title hidden" >

                            </div>
                        </div>
                        <div className=' lg:mt-10'>
                            <p className='text-slate-400  ml-2 lg:ml-6'>{"</h1>"}</p>
                            <p className='text-slate-400  ml-2 lg:ml-8'>{"<p>"}</p>
                            <p className='text-gray-800 dark:text-white md:text-lg lg:text-lg font-sans  ml-2 lg:ml-20'>You can also call me Saurav Dhakal.</p>
                            <p className='text-slate-400  ml-2 lg:ml-8'>{"</p>"}</p>
                            <p className='text-slate-400  lg:ml-4'>{"</body>"}</p>
                            <p className='text-slate-400 -ml-1 lg:ml-0  mt-2'>{"</html>"}</p>
                        </div>
                        <div className='bottom-28 pointer-events-auto  hidden lg:block'>
                            <Accounts />
                        </div>
                    </div>
                </div>

                <div className='lg:hidden pointer-events-auto absolute bottom-32 items-center w-full '>
                    <Accounts />
                </div>
                <div className='ml-2 text-sm lg:text-base lg:ml-6 absolute bottom-16 lg:bottom-12 '>

                    <p className='scrollDownLeft animateWord  font-serif text-gray-800 dark:text-white'>Scroll down </p>
                    <BsArrowDown className='text-gray-800 dark:text-white font-serif ml-[2px] ' />
                </div>
                <div className='right-3 text-sm lg:text-base lg:right-6 absolute lg:bottom-12 bottom-16'>

                    <p className='animateWord text-gray-800 dark:text-white scrollDownRight  font-serif  '>Scroll down</p>
                    <BsArrowDown className='text-gray-800 dark:text-white font-serif ml-[2px] ' />
                </div>

            </div>
        </>
    )
}

export default HomePage