import React, { useEffect, useRef } from 'react'
import Tendrils from '../../components/Tendrils Effects'

export default function Skills() {

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

                    if (i === 6 ) {
                        domItem.current.innerHTML += "<br>"
                    }
                    if (i === 8) { domItem.current.innerHTML += `<span class='added text-gray-900 dark:text-white dark:hover:text-[#00ffff] ml-4 lg:text-4xl transition-all duration-300 ease-in-out'  >` + splittext[i] + "</span>" }
                    else {
                        domItem.current.innerHTML += `<span class='added text-gray-900 dark:text-white dark:hover:text-[#00ffff] lg:text-4xl transition-all duration-300 ease-in-out'  >` + splittext[i] + "</span>"
                    }
                }
            }
            let count = 0;
            let timer = setInterval(animateLetter, 70)

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

        <div className='absolute h-full w-full items-center flex justify-center'>
          <div className='relative htmlTags lg:w-[60%]  lg:mx-auto pointer-events-none'>
            <p className=' text-gray-600 -ml-4 lg:ml-0'>{"</html>"}</p>
            <p className=' text-gray-600 lg:ml-4 lg:mt-1'>{"<body>"}</p>
            <p className=' text-gray-600 ml-2 lg:ml-6'>{"<h1>"}</p>
            <div className='my-3 lg:h-40 lg:w-[80%] mx-auto pointer-events-auto   items-center ' >
              <div ref={domItem} className="title hidden" >
                Skills & Experience
              </div>
            </div>
            <div className=' lg:mt-10'>
              <p className='text-gray-600 ml-2 lg:ml-6'>{"</h1>"}</p>
              <p className='text-gray-600 lg:ml-4'>{"</body>"}</p>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}
