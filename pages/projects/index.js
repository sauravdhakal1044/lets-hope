import React, { useEffect, useRef } from 'react'
import Footer from '../../components/footer'
import Tendrils from '../../components/Tendrils Effects'
import ProjectItems from './ProjectItem'

export default function Projects() {

  const domItem = useRef(null)

  const animateFunc = (e) => {
    e.target.classList.remove("bounceIn")
    e.target.classList.add("rubberBand")
  }
  const endAnimate = (e) => {
    e.target.classList.remove("rubberBand")
  }


  useEffect(() => {
    setTimeout(() => {
      // if (set) {
      const text = domItem.current?.textContent
      const splittext = text.split("")
      domItem.current.innerText = ""
      domItem.current?.classList.remove("hidden")
      for (let i = 0; i < splittext.length; i++) {
        if (domItem.current) {
          if (i === 3) { domItem.current.innerHTML += `<span class='added text-gray-900 dark:text-white dark:hover:text-[#00ffff] ml-4 text-5xl md:text-6xl lg:text-4xl'  >` + splittext[i] + "</span>" }
          else {
            domItem.current.innerHTML += `<span class='added lg:text-4xl text-gray-900 dark:text-white dark:hover:text-[#00ffff] text-5xl md:text-6xl '  >` + splittext[i] + "</span>"
          }
        }
      }
      let count = 0;
      let timer = setInterval(animateLetter, 65)

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
    }, 800);
  }, [])

  return (
    <>

      <div className='relative h-screen w-screen bg-[#FBE8EE] dark:bg-[#111827] transition-all duration-300 ease-in-out '>
        <Tendrils />
        <div className='overflow-y-scroll absolute h-full w-full pt-20 '>
          <div className=' px-3 '>
            <div className='relative htmlTags lg:w-[85%]  lg:mx-auto pointer-events-none'>
              <div className='pb-10'>
                <p className=' text-gray-600 -ml-4 lg:ml-0'>{"</html>"}</p>
                <p className=' text-gray-600 lg:ml-4 lg:mt-1'>{"<body>"}</p>
                <p className=' text-gray-600 ml-2 lg:ml-6'>{"<h1>"}</p>
                <p className='text-border dark:text-border-light opacity-20 dark:opacity-20 font-sans text-5xl w-screen lg:w-[60%] lg:text-8xl absolute -ml-5 -mt-2 lg:-mt-4 text-center'>My Projects</p>
                <div className='my-3 lg:h-28 lg:w-[95%] mx-auto pointer-events-auto   items-center self-center flex justify-items-center ' >
                  <div ref={domItem} className="title hidden" >
                    My Works
                  </div>
                </div>
                <p className='text-gray-600 ml-2 lg:ml-6'>{"</h1>"}</p>
                <p className=' text-gray-600 ml-2 lg:ml-6'>{"<p>"}</p>
                <div className='lg:px-10 px-2'>
                  <p className=' text-lg text-gray-900 dark:text-white dark:hover:text-[#00ffff] font-sans'>These are the projects I made. I like creating and learning new stuffs. </p>
                </div>
                <p className=' text-gray-600 ml-2 lg:ml-6'>{"</p>"}</p>
                <p className='text-gray-600 ml-2 lg:ml-6'>{"<projects>"}</p>
                <div className=' lg:px-10'>
                  <ProjectItems />
                </div>
              </div>
              <div className=' lg:mt-10'>
                <p className='text-gray-600 ml-2 lg:ml-6'>{"</projects>"}</p>
                <p className='text-gray-600 lg:ml-4'>{"</body>"}</p>
              </div>
            </div>
          </div>
          <div className='pt-2'>
            <Footer />
          </div>
        </div>
      </div>
    </>

  )
}
