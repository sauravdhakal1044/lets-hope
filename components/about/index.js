import React, { useEffect, useRef, useState } from 'react'
import ForMobile from '../mySkillsMobile'
import SkillsTable from '../SkillsTable'
import CanvasEffect from '../tagcanvas'
import CanvasEffectMobile from '../tagCanvasMobile'

export default function About() {

  const [scroll, setscroll] = useState()
  const [loaded, setloaded] = useState(false)

  const domItem = useRef(null)
  const domContainer = useRef(null)

  const animateHead = (e) => {
    e.target.classList.remove("bounceIn")
    e.target.classList.add("rubberBand")
  }

  const animateFunc = (e) => {
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
      if (domItem.current) {
        setTimeout(() => {
          // if (set) {
          const text = "Wanna know about me ?"
          const splittext = text.split("")
          domItem.current?.classList.remove("hidden")
          for (let i = 0; i < splittext.length; i++) {
            if (domItem.current) {

              if (i === 5 || i === 16) {
                domItem.current.innerHTML += "<br>"
              }
              if (i === 11) { domItem.current.innerHTML += `<span class='added font-medium text-gray-900 dark:text-white dark:hover:text-[#00ffff] text-5xl ml-4 lg:text-4xl'  >` + splittext[i] + "</span>" }
              else {
                domItem.current.innerHTML += `<span class=' text-gray-900 dark:text-white dark:hover:text-[#00ffff] text-5xl lg:text-4xl font-medium added '  >` + splittext[i] + "</span>"
              }
            }
          }
          let count = 0;
          let timer = setInterval(animateLetter, 50)

          function animateLetter() {
            const span = domItem.current?.querySelectorAll("span")[count]
            span?.classList.add("fade");
            span?.classList.add("bounceIn");
            span?.addEventListener("mouseenter", animateHead)
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

    }
  }, [scroll, loaded])


  return (
    <>

      <div className=' py-10 w-full bg-[#FBE8EE] dark:bg-[#111827] transition-all duration-300 ease-in-out'>
        <div className='transition-all duration-500 delay-300 ease-in-out  w-full px-6  lg:flex lg:justify-between lg:pr-5'>
          <div className='relative htmlTags lg:pl-32 lg:w-[60%] pointer-events-none '>
            <p className=' text-gray-600 -ml-4 lg:ml-0'>{"</html>"}</p>
            <p className=' text-gray-600 lg:ml-4 lg:mt-1'>{"<body>"}</p>
            <p className=' text-gray-600 ml-2 lg:ml-6'>{"<h1>"}</p>
            <div ref={domContainer} className='my-3 lg:h-40 lg:w-[80%] mx-auto pointer-events-auto   items-center px-4  lg:px-0 ' >
              <div ref={domItem} className="title hidden" >
                
              </div>
            </div>
            <div className=' lg:mt-10'>
              <p className='text-gray-600 ml-2 lg:ml-6'>{"</h1>"}</p>
              <p className='text-gray-600 ml-2 lg:ml-8'>{"<p>"}</p>
              <p className='text-gray-800 dark:text-white lg:text-lg font-sans lg:w-[80%]  ml-4 lg:ml-16'>Iam a full-stack developer who loves to build cool websites with beautiful designs. I love new challenges and problems and to code. </p>
              <p className='text-gray-800 ml-4 lg:ml-16 lg:text-lg dark:text-white font-sans my-2 lg:w-[80%]'>I have been learning and doing projects, and creating fabulous projects for the past two years.</p>
              <p className='text-gray-600 ml-2 lg:ml-10'>{"</p>"}</p>
              <div className='  py-8 lg:pl-12 pointer-events-auto'>
                <ForMobile />
                <div className='relative hidden lg:block  h-32 '>
                  <p className='absolute text-border opacity-25 dark:opacity-25 font-sans lg:text-7xl -mt-5  ml-8 transition-all duration-300 ease-in-out '>My Skills and Info</p>
                  <div className='absolute z-30 flex  my-6'>
                    <p className='text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>M</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>y</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-5' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>S</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>k</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>i</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>l</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>l</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>s</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-5' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>a</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>n</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>d</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-5' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>I</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>n</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>f</p>
                    <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>o</p>
                  </div>

                </div>
              </div>
              <p className='text-gray-600 lg:ml-4'>{"</body>"}</p>
              <div className='md:items-center w-full lg:flex lg:justify-center '>
                <SkillsTable />
              </div>
            </div>
          </div>
          <div className='top-10'>
            <div className='hidden lg:block'>
              <CanvasEffect />
            </div>
            <div className=' lg:hidden'>
              <CanvasEffectMobile />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
