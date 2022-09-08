import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Pitems from '../Projects items'

export default function Projects() {

  const [loaded, setloaded] = useState(false)
  const [scroll, setscroll] = useState()

  const domItem = useRef(null)
  const domContainer = useRef(null)

  const animateFunc = (e) => {
    e.target.classList.remove("bounceIn")
    e.target.classList.add("rubberBand")
  }
  const endAnimate = (e) => {
    e.target.classList.remove("rubberBand")
  }

  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setscroll(entry.isIntersecting)
    })
    observer.observe(domContainer.current)
  }, [])


  useEffect(() => {
    if (scroll && !loaded) {
      setTimeout(() => {
        if (domItem.current) {
          // if (set) {
          const text = "Some of my works"
          const splittext = text.split("")
          domItem.current?.classList.remove("hidden")
          for (let i = 0; i < splittext.length; i++) {
            if (domItem.current) {
              if (i === 5 || i === 7 || i === 11) { domItem.current.innerHTML += `<span class='added text-gray-900 dark:text-white dark:hover:text-[#00ffff] ml-4 lg:text-4xl'  >` + splittext[i] + "</span>" }
              else {
                domItem.current.innerHTML += `<span class='added lg:text-4xl text-gray-900 dark:text-white dark:hover:text-[#00ffff] '  >` + splittext[i] + "</span>"
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
            setloaded(true)
          }
        }
      }
        , 30);
    }
  }, [scroll])

  return (
    <>

      <div className='w-screen bg-[#FBE8EE] dark:bg-[#111827]  transition-all duration-300 ease-in-out py-5'>
        <div className=' w-full flex px-5'>
          <div ref={domContainer} className='relative htmlTags lg:w-[80%] lg:mx-auto pointer-events-none items-center'>
            <p className=' text-gray-600 -ml-4 lg:ml-4 lg:mt-1'>{"<projects>"}</p>
            <p className=' text-gray-600 ml-2 lg:ml-6'>{"<h1>"}</p>
            <div className='my-3 h-24 lg:h-28 lg:w-[90%] mx-auto pointer-events-auto   items-center flex justify-center relative' >
              <p className='text-border dark:text-border-light opacity-20 dark:opacity-20 font-sans text-5xl w-screen lg:w-full lg:text-8xl -ml-2 absolute lg:ml-12 -mt-10 text-center lg:text-left'>Sample Projects</p>
              <div className='pt-5 pb-4 lg:py-8 lg:h-28 lg:w-full mx-auto pointer-events-auto w-full  items-center absolute' >
                <div ref={domItem} className="title hidden" >

                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-800 dark:text-white dark:hover:text-[#00ffff] font-sans lg:text-lg'>I have done some cool projects using different techs and some of them are listed below</p>
            </div>
            <div className=''>
              <Pitems />
            </div>
            <div className='py-2'>
              <p className='text-gray-800 dark:text-white dark:hover:text-[#00ffff] font-sans text-lg'>Why not check some of my others project too. I know you gonna enjoy them too.</p>
            </div>
            <Link href={"/projects"}>
              <button className='text-gray-800 dark:text-white  pointer-events-auto w-36 my-5   border h-10 rounded p-2 hoverBtn btn1 transition-colors duration-300 ease-in-out hover:text-white dark:hover:text-black border-gray-800 dark:border-white after:bg-gray-700 dark:after:bg-[#00ffff]'>
                View More
              </button>
            </Link>
            <div className=' lg:mt-10'>
              <p className='text-gray-600 ml-2 lg:ml-6'>{"</h1>"}</p>
              <p className='text-gray-600 -ml-4 lg:ml-0'>{"</projects>"}</p>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}
