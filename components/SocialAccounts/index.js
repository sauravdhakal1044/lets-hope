import React from 'react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { SiUpwork, SiGithub } from 'react-icons/si'

function Accounts() {
  return (
    <>

      <div className='flex gap-5 justify-center'>
        <a href="https://github.com/sisirdhakal" rel='noreferrer' target="_blank">
         
          <SiGithub className='h-6 w-6 cursor-pointer text-gray-900 dark:text-white dark:hover:text-[#3A9ECF]' />
        </a>
        <a href="https://www.instagram.com/sisirdhakal_sd/" rel='noreferrer' target="_blank">

          <FaInstagram className='h-6 w-6 cursor-pointer text-gray-900 dark:text-white hover:text-[#C32866] dark:hover:text-[#C32866]' />
        </a>
        <a href="https://www.upwork.com/freelancers/~010fb3857616e3c8e0" rel='noreferrer' target="_blank">

          <SiUpwork className='h-6 w-6 cursor-pointer text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-500' />
        </a>

        <a href="https://www.linkedin.com/in/saurav-dhakal-bb2533224/" rel='noreferrer' target="_blank">
          <FaLinkedinIn className='h-6 w-6 cursor-pointer text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500' />
        </a>

      </div>

    </>
  )
}

export default Accounts