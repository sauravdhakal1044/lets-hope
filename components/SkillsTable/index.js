import React, { useEffect, useRef, useState } from 'react'

function SkillsTable() {
  const domContainer = useRef(null)
  const frontEnd = useRef(null)
  const backEnd = useRef(null)
  const reactJs = useRef(null)
  const uiux = useRef(null)
  const mongoDB = useRef(null)
  const [scroll, setscroll] = useState()

  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setscroll(entry.isIntersecting)
    })
    observer.observe(domContainer.current)
  }, [])

  useEffect(() => {

    if (scroll) {
      setTimeout(() => {
        frontEnd.current.classList.remove('w-0')
        frontEnd.current.classList.add('w-[80%]')
        backEnd.current.classList.remove('w-0')
        backEnd.current.classList.add('w-[70%]')
        reactJs.current.classList.remove('w-0')
        reactJs.current.classList.add('w-[85%]')
        uiux.current.classList.remove('w-0')
        uiux.current.classList.add('w-[65%]')
        mongoDB.current.classList.remove('w-0')
        mongoDB.current.classList.add('w-[60%]')
      }, 10);
    }
    else {
      frontEnd.current.classList.remove('w-[80%]')
      frontEnd.current.classList.add('w-0')
      backEnd.current.classList.remove('w-[70%]')
      backEnd.current.classList.add('w-0')
      reactJs.current.classList.remove('w-[85%]')
      reactJs.current.classList.add('w-0')
      uiux.current.classList.remove('w-[65%]')
      uiux.current.classList.add('w-0')
      mongoDB.current.classList.remove('w-[60%]')
      mongoDB.current.classList.add('w-0')
    }
  }, [scroll])

  return (
    <>
      <div className='lg:ml-10 lg:pb-4  lg:w-[480px] md:w-[60%] '>

        <div className=' mx-auto'>


        <p  className='text-gray-900 py-2 font-sans dark:text-white'>ReactJS</p>
          <div className='dark:bg-[#FBE8EE] bg-[#111827] h-1 rounded-md '>
            <div ref={reactJs} className='h-full rounded-md w-0 skillContainer transition-all duration-700 ease-in-out bg-indigo-600'>

            </div>
          </div>

          <p className='text-gray-900 py-2 font-sans dark:text-white'>FrontEnd</p>
          <div className='dark:bg-[#FBE8EE] bg-[#111827]  h-1 rounded-md '>
            <div ref={frontEnd} className='h-full rounded-md w-0 skillContainer transition-all duration-[1100ms]  ease-in-out bg-cyan-400'>

            </div>
          </div>


          <p ref={domContainer} className='text-gray-900 py-2 dark:text-white font-sans'>BackEnd-NodeJs/ExpressJs</p>
          <div className='dark:bg-[#FBE8EE] bg-[#111827] h-1 rounded-md '>
            <div ref={backEnd} className='h-full rounded-md w-0 skillContainer transition-all duration-[1500ms] ease-in-out bg-red-600'>

            </div>
          </div>

          <p className='text-gray-900 py-2 font-sans dark:text-white'>UI/UX</p>
          <div className='dark:bg-[#FBE8EE] bg-[#111827] h-1 rounded-md '>
            <div ref={uiux} className='h-full rounded-md w-0 skillContainer transition-all duration-[1900ms] ease-in-out bg-pink-500'>

            </div>
          </div>

          <p className='text-gray-900 py-2 font-sans dark:text-white'>MongoDB</p>
          <div className='dark:bg-[#FBE8EE] bg-[#111827] h-1 rounded-md '>
            <div ref={mongoDB} className='h-full rounded-md w-0 skillContainer transition-all duration-[2300ms] ease-in-out bg-emerald-500'>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default SkillsTable