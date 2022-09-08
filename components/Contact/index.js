import React, { useEffect, useRef, useState } from 'react'
import Accounts from '../SocialAccounts'
import Link from 'next/link'

export default function Contact() {

  const [loaded, setloaded] = useState(false)
  const [scroll, setscroll] = useState(false)

  const domItem = useRef(null)
  const domContainer = useRef(null)
  const mainContainer = useRef(null)

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
        // if (set) {
        const text = "Get in touch with me"
        const splittext = text.split("")
        domItem.current?.classList.remove("hidden")
        for (let i = 0; i < splittext.length; i++) {
          if (domItem.current) {
            if (i === 7 || i === 3 || i === 12 || i === 17) { domItem.current.innerHTML += `<span class='added text-gray-900 dark:text-white hover:text-[#00ffff] dark:hover:text-[#00ffff] ml-2 lg:ml-4 lg:text-4xl '  >` + splittext[i] + "</span>" }
            else {
              domItem.current.innerHTML += `<span class='added lg:text-4xl text-gray-900 dark:text-white hover:text-[#00ffff] dark:hover:text-[#00ffff] '  >` + splittext[i] + "</span>"
            }
          }
        }
        let count = 0;
        let timer = setInterval(animateLetter, 55)

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
      }, 30);
    }
  }, [scroll, loaded])

  return (
    <>
      <div className=' w-screen bg-[#FBE8EE] dark:bg-[#111827]  transition-all duration-300 ease-in-out py-6'>
        <div className=' w-full  flex items-center px-6 transition-all duration-300 delay-300'>
          <div ref={domContainer} className='relative htmlTags lg:w-[85%]  lg:mx-auto pointer-events-none'>
            <p className=' text-gray-600 lg:ml-4 lg:mt-1'>{"<contact>"}</p>
            <p className=' text-gray-600 ml-2 lg:ml-6'>{"<h1>"}</p>
            <p className='text-border dark:text-border-light opacity-20 dark:opacity-20 font-sans text-5xl w-screen lg:w-full lg:text-8xl absolute -ml-5 lg:-ml-16 -mt-2 lg:-mt-6 text-center'>Connect with Me</p>
            <div className='pt-5 pb-4 lg:py-8 lg:h-28 lg:w-[85%] mx-auto pointer-events-auto  items-center  ' >
              <div ref={domItem} className="title hidden" >

              </div>
            </div>
            <div className=''>
              <p className='text-gray-600 ml-2 lg:ml-6'>{"</h1>"}</p>
              <p className='text-gray-600 ml-4 lg:ml-8'>{"<p>"}</p>
              <p className='text-gray-800 dark:text-white lg:text-lg font-sans  ml-2 lg:ml-20'>
                Wanna contact me?, Need help?, then you can get in touch with me with either of my social accounts.
              </p>

              <div className='py-4 pointer-events-auto'>
                <Accounts />
              </div>

              <p className='text-gray-800 dark:text-white lg:text-lg font-sans  ml-2 lg:ml-20'>
                Or you can directly mail me by clicking the button below.
              </p>


              <Link href={"/contact"}>
                <button className='text-gray-800 dark:text-white  pointer-events-auto w-36 my-5   border h-10 rounded p-2 ml-2 lg:ml-20 hoverBtn btn1 transition-colors duration-300 ease-in-out hover:text-white dark:hover:text-black border-gray-800 dark:border-white after:bg-gray-700 dark:after:bg-[#00ffff]'>
                  Contact Me
                </button>
              </Link>

              {/* */}


              <p className='text-gray-600 ml-4 lg:ml-8'>{"</p>"}</p>
            </div>
            <div className=''>

              <p className=' text-gray-600 lg:ml-4 lg:mt-1'>{"</contact>"}</p>
              <p className=' text-gray-600 -ml-4 lg:ml-0'>{"</html>"}</p>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}
