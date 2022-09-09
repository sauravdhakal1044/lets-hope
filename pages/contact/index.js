import React, { useEffect, useRef } from 'react'
import Footer from '../../components/footer'
import Tendrils from '../../components/Tendrils Effects'
import Emailjs from '@emailjs/browser'

export default function Contact() {

  const domItem = useRef(null)
  const form = useRef();

  const animateFunc = (e) => {
    e.target.classList.remove("bounceIn")
    e.target.classList.add("rubberBand")
  }
  const endAnimate = (e) => {
    e.target.classList.remove("rubberBand")
  }

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env)

    Emailjs.sendForm(process.env.EMAILJS_SERVICE, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };


  useEffect(() => {
    setTimeout(() => {
      // if (set) {
      const text = domItem.current?.textContent
      const splittext = text.split("")
      domItem.current.innerText = ""
      domItem.current?.classList.remove("hidden")
      for (let i = 0; i < splittext.length; i++) {
        if (domItem.current) {
          if (i === 7) { domItem.current.innerHTML += `<span class='added text-gray-900 dark:text-white dark:hover:text-[#00ffff] ml-6 text-5xl lg:text-4xl'  >` + splittext[i] + "</span>" }
          else {
            domItem.current.innerHTML += `<span class='added lg:text-4xl text-gray-900 dark:text-white dark:hover:text-[#00ffff] text-5xl'  >` + splittext[i] + "</span>"
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

      <div className='relative h-screen w-screen bg-[#FBE8EE] dark:bg-[#111827] transition-all duration-300 ease-in-out'>

        <Tendrils />

        <div className='absolute h-full w-full items-center pt-20 overflow-y-scroll scrollbar-hide'>
          <div className='px-4 lg:px-10'>
            <div className='relative htmlTags lg:w-[60%]  lg:mx-auto pointer-events-none'>
              <p className=' text-gray-600 -ml-4 lg:ml-0'>{"<html>"}</p>
              <p className=' text-gray-600 lg:ml-4 lg:mt-1'>{"<body>"}</p>
              <p className=' text-gray-600 ml-2 lg:ml-6'>{"<h1>"}</p>
              <p className='text-border dark:text-border-light opacity-20 dark:opacity-20 font-sans text-5xl w-screen lg:w-full lg:text-8xl absolute -ml-5 -mt-2 lg:-mt-8 text-center'>Contact Me</p>
              <div className='my-4 ml-4 lg:ml-16 h-12 lg:h-20 lg:w-[80%] mx-auto pointer-events-auto   items-center ' >
                <div ref={domItem} className="title hidden" >
                  Contact me
                </div>
              </div>
              <div className=' lg:mt-10'>
                <p className='text-gray-600 ml-2 lg:ml-6'>{"</h1>"}</p>
                <p className='text-gray-600 ml-4 lg:ml-6'>{"<p>"}</p>
                <p className='text-gray-800 dark:text-white lg:text-lg font-sans  ml-2 lg:ml-20'>If you have anything to say to me or Wanna <span className='dark:text-[#00ffff] font-medium text-green-600'>Work</span> with me or <span className='dark:text-[#00ffff] font-medium text-green-600'>Hire me</span> then don't hesitate to fill the form.</p>
                <p className='text-gray-600 ml-4 lg:ml-6'>{"</p>"}</p>
              </div>
              <div className=''>
                <p className='text-gray-600 ml-2 lg:ml-6'>{"<form>"}</p>
                <form ref={form} action="" className='pointer-events-auto  w-[88%] lg:[85%] lg:ml-10 mx-auto grid grid-cols-1 gap-y-2 lg:gap-0' onSubmit={sendEmail}>
                  <div className='lg:flex w-full grid grid-cols-1 gap-y-2 lg:gap-x-2 formItems'>
                    <div className='w-full '>
                      <p className='text-gray-800 dark:text-white font-sans'>Name</p>
                      <input type="text" placeholder='your company or your name' name="name" className='w-full h-8 lg:h-10 rounded placeholder:text-sm placeholder:text-gray-400 focus:ring-gray-800 border-gray-500 focus:border-gray-800 dark:focus:ring-[#00ffff] dark:focus:border-[#00ffff]' id="" />
                    </div>
                    <div className='w-full '>
                      <p className='text-gray-800 dark:text-white font-sans'>Email</p>
                      <input type="email" placeholder='eg: dhakalsaurav023@gmail.com ' name="email" className='w-full h-8 lg:h-10 rounded placeholder:text-sm placeholder:text-gray-400 focus:ring-gray-800 border-gray-500 focus:border-gray-800 dark:focus:ring-[#00ffff] dark:focus:border-[#00ffff]' id="" />
                    </div>
                  </div>

                  <div className='formItems'>
                    <p className='text-gray-800 dark:text-white font-sans'>Message</p>
                    <input type="text" placeholder='eg : you are hired for the work' name="message" className='w-full h-20 rounded placeholder:text-sm placeholder:text-gray-400 focus:ring-gray-800 border-gray-500 focus:border-gray-800 dark:focus:ring-[#00ffff] dark:focus:border-[#00ffff]' id="" />
                  </div>

                  <div className='w-full items-center flex justify-center formItems'>
                    <button className='text-gray-800 dark:text-white  pointer-events-auto w-full lg:w-[50%] mx-auto my-2   border h-8 lg:h-10 rounded hoverBtn btn1 transition-colors duration-300 ease-in-out hover:text-white dark:hover:text-black border-gray-800 dark:border-white after:bg-gray-700 dark:after:bg-[#00ffff] '>
                      Send Message
                    </button>
                  </div>

                </form>
                <p className='text-gray-600 ml-2 lg:ml-6 fadeInUpBig'>{"</form>"}</p>
                <p className=' text-gray-600 lg:ml-4 lg:mt-1 fadeInUpBig'>{"</body>"}</p>
                <p className=' text-gray-600 -ml-4 lg:ml-0 fadeInUpBig'>{"</html>"}</p>
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
