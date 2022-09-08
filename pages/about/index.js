import React, { useEffect, useRef, useState } from 'react'
import SkillsTable from '../../components/SkillsTable'
import CanvasEffect from '../../components/tagcanvas'
import Tendrils from '../../components/Tendrils Effects'
import ForMobile from '../../components/mySkillsMobile'
import CanvasEffectMobile from '../../components/tagCanvasMobile'
import Education from '../../components/educations'
import Images from '../../components/image slider'
import Footer from '../../components/footer'


export default function About() {

  const [scroll, setscroll] = useState()
  const [loaded, setloaded] = useState(false)
  const [animate, setAnimate] = useState(false)

  const domItem = useRef(null)
  const domContainer = useRef(null)
  const educationContainer = useRef(null)


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

    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setAnimate(entry.isIntersecting)
    })
    observer.observe(educationContainer.current)
  }, [])

  useEffect(() => {

    if (animate) {
      educationContainer.current.classList.add("educationLetters")
    }
    else {
      educationContainer.current.classList.remove("educationLetters")
    }

  }, [animate])



  useEffect(() => {

    if (scroll && !loaded) {
      if (domItem.current) {
        setTimeout(() => {
          if (domItem.current) {
            // if (set) {
            const text = "Myself, Sisir Dhakal"
            const splittext = text.split("")
            domItem.current?.classList.remove("hidden")
            for (let i = 0; i < splittext.length; i++) {
              if (domItem.current) {

                if (i === 7) {
                  domItem.current.innerHTML += "<br>"
                }
                if (i === 8 || i === 14) { domItem.current.innerHTML += `<span class='added font-medium text-gray-900 dark:text-white dark:hover:text-[#00ffff] text-5xl lg:ml-5 ml-4 lg:text-4xl md:text-6xl'  >` + splittext[i] + "</span>" }
                else {
                  domItem.current.innerHTML += `<span class=' text-gray-900 dark:text-white dark:hover:text-[#00ffff] text-5xl lg:text-4xl font-medium added md:text-6xl'  >` + splittext[i] + "</span>"
                }
              }
            }
            let count = 0;
            let timer = setInterval(animateLetter, 65)

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
          }
        }
          , 800);
      }
    }

  }, [scroll, loaded])


  return (
    <>

      <div className=' w-screen h-screen relative bg-[#FBE8EE] dark:bg-[#111827] transition-all duration-300 ease-in-out'>
        <Tendrils />

        <div className='h-full w-full pt-20 absolute overflow-y-scroll'>
          <div className=' px-6 '>

            <div className='w-full relative lg:flex'>
              <div className='relative htmlTags lg:px-10 lg:w-[60%]  pointer-events-none'>
                <p className=' text-gray-600 -ml-4 lg:ml-0'>{"</html>"}</p>
                <p className=' text-gray-600 lg:ml-4 lg:mt-1'>{"<body>"}</p>
                <p className=' text-gray-600 ml-2 lg:ml-6'>{"<h1>"}</p>
                <div ref={domContainer} className='my-3 lg:h-32 lg:w-[90%] mx-auto pointer-events-auto   items-center px-4  lg:px-0 ' >
                  <div ref={domItem} className="title hidden" >

                  </div>
                </div>
                <div className=' w-[100%] lg:mt-10'>
                  <p className='text-gray-600 ml-2 lg:ml-6'>{"</h1>"}</p>
                  <p className='text-gray-600 ml-2 lg:ml-8'>{"<p>"}</p>
                  <p className='text-gray-800 dark:text-white lg:text-lg font-sans lg:w-[80%]  ml-4 lg:ml-16 transition-all duration-300 ease-in-out'>I'am a Full-stack Web developer who loves to build cool websites with beautiful designs. I love new challenges and problems and to code. </p>

                  <p className='text-gray-800 ml-4 lg:ml-16 lg:text-lg dark:text-white font-sans my-2 lg:w-[80%] transition-all duration-300 ease-in-out'>I completed my <span className='font-medium'>high school</span>  in <span className='text-[#00ffff] font-medium'>Computer Science </span>with an <span className='font-medium'>CGPA</span>  of <span className='font-semibold text-[#ff0000]'>3.40</span> .</p>

                  <p className='text-gray-800 ml-4 lg:ml-16 lg:text-lg dark:text-white font-sans my-2 lg:w-[80%] transition-all duration-300 ease-in-out'>
                    I am currently pursuing my third year Bachelor of <span className='text-[#00ffff] font-medium'>Computer Engineering</span>  at <span className='font-medium'>TU, IOE, PASCHIMANCHAL CAMPUS ( WRC )</span>
                  </p>
                  <p className='text-gray-800 ml-4 lg:ml-16 lg:text-lg dark:text-white font-sans my-2 lg:w-[80%] transition-all duration-300 ease-in-out'>
                    I have been learning, and creating fabulous projects for the past two years.
                  </p>

                  <p className='text-gray-600 ml-2 lg:ml-10'>{"</p>"}</p>
                  <div className=' items-center flex justify-center lg:hidden'>
                    <Images />
                  </div>
                  <p className='text-gray-600 ml-2 lg:ml-10'>{"<skills>"}</p>
                  <div className=' w-full  py-8 lg:pl-12 pointer-events-auto'>
                    <ForMobile />
                    <div className='relative hidden lg:block  h-24 '>
                      <p className='absolute text-border dark:text-border-light opacity-25 dark:opacity-25 font-sans lg:text-7xl -mt-5  ml-8 transition-all duration-300 ease-in-out '>My Skills Chart</p>
                      <div className='absolute z-30 flex  my-6'>
                        <p className='text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>M</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>y</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-5' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>S</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>k</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>i</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>l</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>l</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>s</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-5' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>C</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>h</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>a</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>r</p>
                        <p className=' text-gray-800 dark:text-white aboutSkills  font-sans dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>t</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='top-10 hidden lg:block lg:w-[40%]'>
                <Images />
              </div>
            </div>
            {/* skills tables begins */}

            <div className='lg:items-center w-full  lg:px-20  lg:flex lg:justify-between overflow-x-clip overscroll-x-none'>
              <div className='w-full lg:flex lg:justify-center lg:items-center'>

                <SkillsTable />
              </div>
              <div className='hidden lg:block bg-[#FBE8EE] dark:bg-[#111827] transition-all duration-300 ease-in-out'>
                <CanvasEffect />
              </div>
              <div className='-ml-4 lg:hidden bg-[#FBE8EE] dark:bg-[#111827] transition-all duration-300 ease-in-out'>
                <CanvasEffectMobile />
              </div>
            </div>
            <p className='text-gray-600 py-2 lg:ml-10'>{"</skills>"}</p>
            <p className='text-gray-600 lg:ml-12'>{"<education>"}</p>

            {/* educations tables begins */}

            <div className='relative py-6 lg:pl-20'>
              <div className='relative h-20 lg:h-28'>
                <p className='absolute text-border dark:text-border-light opacity-25 dark:opacity-25 font-sans text-edu lg:text-7xl -ml-6 -mt-4 lg:-mt-5  lg:ml-8 transition-all duration-300 ease-in-out'>My Education</p>
                <div className='absolute z-30 w-full my-6'>
                  <div ref={educationContainer} className='flex items-center justify-center lg:justify-start '>
                    <p className='text-gray-800 dark:text-white  transition-opacity duration-300 ease-in-out text-5xl lg:text-4xl font-sans  opacity-0 dark:hover:text-[#00FFFF]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>M</p>
                    <p className=' text-gray-800 dark:text-white  transition-opacity duration-300 ease-in-out text-5xl lg:text-4xl font-sans  opacity-0 dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>y</p>
                    <p className=' text-gray-800 dark:text-white  transition-opacity duration-300 ease-in-out text-5xl lg:text-4xl font-sans  opacity-0 dark:hover:text-[#00FFFF] ml-5' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>E</p>
                    <p className=' text-gray-800 dark:text-white  transition-opacity duration-300 ease-in-out text-5xl lg:text-4xl font-sans  opacity-0 dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>d</p>
                    <p className=' text-gray-800 dark:text-white  transition-opacity duration-300 ease-in-out text-5xl lg:text-4xl font-sans  opacity-0 dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>u</p>
                    <p className=' text-gray-800 dark:text-white  transition-opacity duration-300 ease-in-out text-5xl lg:text-4xl font-sans  opacity-0 dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>c</p>
                    <p className=' text-gray-800 dark:text-white  transition-opacity duration-300 ease-in-out text-5xl lg:text-4xl font-sans  opacity-0 dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>a</p>
                    <p className=' text-gray-800 dark:text-white  transition-opacity duration-300 ease-in-out text-5xl lg:text-4xl font-sans  opacity-0 dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>t</p>
                    <p className=' text-gray-800 dark:text-white  transition-opacity duration-300 ease-in-out text-5xl lg:text-4xl font-sans  opacity-0 dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>i</p>
                    <p className=' text-gray-800 dark:text-white  transition-opacity duration-300 ease-in-out text-5xl lg:text-4xl font-sans  opacity-0 dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>o</p>
                    <p className=' text-gray-800 dark:text-white  transition-opacity duration-300 ease-in-out text-5xl lg:text-4xl font-sans  opacity-0 dark:hover:text-[#00FFFF] ml-[2px]' onMouseEnter={animateFunc} onAnimationEnd={endAnimate}>n</p>
                  </div>

                </div>
              </div>
              <div className=''>
                <Education />
              </div>

            </div>
            <p className='text-gray-600 lg:ml-12'>{"</education>"}</p>
            <p className='text-gray-600 lg:ml-9 -ml-2 lg:py-1'>{"</body>"}</p>
            <p className='text-gray-600 -ml-4  py-1 lg:ml-6'>{"</html>"}</p>
            <p className='text-gray-600 -ml-4  py-1 lg:ml-6'>{"</html>"}</p>
          </div>
          <div className='pt-2'>

            <Footer />
          </div>
        </div>
      </div>
    </>

  )
}
