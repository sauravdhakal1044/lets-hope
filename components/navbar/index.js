import Link from 'next/link'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { MdDarkMode } from 'react-icons/md'
import { MdLightMode } from 'react-icons/md'
import { BsMoonStarsFill } from 'react-icons/bs'
import { useRouter } from 'next/router'
import ThemeContext from '../../contexts/ThemeContext'

function Navbar({ changeTheme }) {
    const [visible, setvisible] = useState(false)
    const mobileNavbar = useRef(null)
    const [displayNavbar, setdisplayNavbar] = useState(false)
    const [routePath, setRoutePath] = useState("")
    const [test, settest] = useState("")
    const { setTheme } = useContext(ThemeContext)
    const router = useRouter()

    useEffect(() => {

        const currentTheme = localStorage.getItem("theme")
        settest(currentTheme)
        const set = () => {
            const y = window.scrollY
            if (y > 20) {
                setvisible(true)
            }
            else {
                setvisible(false)
            }
        }
        window.addEventListener('scroll', set)
    }, [test])

    useEffect(() => {
        if (router.pathname !== "/") {
            setTimeout(() => {
                setvisible(true)
            }, 800);
        }
        else {
            setTimeout(() => {
                setvisible(false)
            }, 800);
        }
    }, [router])


    const changetheme = (data) => {
        changeTheme(test === "dark" ? "light" : "dark")
        settest(data)
        setTheme(data)
    }

    const toggleNavbar = () => {

        setdisplayNavbar(!displayNavbar)

    }

    useEffect(() => {

        if (displayNavbar) {

            mobileNavbar.current.classList.remove("translate-x-full")
            mobileNavbar.current.classList.add("translate-x-0")
        }
        else {
            mobileNavbar.current.classList.remove("translate-x-0")
            mobileNavbar.current.classList.add("translate-x-full")
        }

    }, [displayNavbar])

    useEffect(() => {

        setRoutePath(router.pathname)

    }, [router.pathname])





    return (
        <>
            {/* laptap navbar */}
            <div className={` gap-1 lg:gap-10 transition-all duration-300 ease-in-out p-3 ${visible ? (" dark:bg-[#111827] bg-[#FBE8EE]") : ("")}  fixed top-0 z-40 justify-center w-screen hidden lg:flex lg:gap-x-16`}>

                <div>

                    <img
                        src="/assets/images/logoDark.png"
                        className=" dark:opacity-100 dark:hidden pointer-events-none h-9 w-[26px] -mt-1 left-8 fixed"
                    />
                    <img
                        src="/assets/images/logoLight.png"
                        className=" dark:opacity-100 dark:block hidden pointer-events-none h-9 w-7 -mt-1 left-8 fixed"
                    />

                </div>


                <Link href={"/"}>
                    <p className={`text-gray-900 hover:text-[#00ffff] dark:hover:text-[#00ffff] relative navItems dark:text-white text-xl cursor-pointer ${routePath === "/" ? "activeRoute" : ""}`}>
                        Home
                    </p>
                </Link>
                <Link href={"/about"}>
                    <p className={`text-gray-900 hover:text-[#00ffff] dark:hover:text-[#00ffff] dark:text-white relative navItems  text-xl cursor-pointer ${routePath === "/about" ? "activeRoute" : ""}`}>
                        About
                    </p>

                </Link>

                <Link href={"/projects"}>
                    <p className={`text-gray-900 hover:text-[#00ffff] dark:hover:text-[#00ffff] relative navItems dark:text-white text-xl cursor-pointer ${routePath === "/projects" ? "activeRoute" : ""}`}>
                        Projects
                    </p>
                </Link>
                <Link href={"/contact"}>
                    <p className={`text-gray-900 hover:text-[#00ffff] dark:hover:text-[#00ffff] relative navItems dark:text-white text-xl cursor-pointer ${routePath === "/contact" ? "activeRoute" : ""}`}>
                        Contact
                    </p>
                </Link>
                <Link href={"/resume"}>
                    <p className={`text-gray-900 hover:text-[#00ffff] dark:hover:text-[#00ffff] relative navItems dark:text-white text-xl cursor-pointer ${routePath === "/resume" ? "activeRoute" : ""}`}>
                        Resume
                    </p>
                </Link>
                <div className='items-center cursor-pointer flex justify-center' >
                    {test === "dark" ?
                        (<MdDarkMode onClick={e => changetheme("light")} className='h-6 w-6 cursor-pointer text-gray-900 dark:text-white' />) : (<MdLightMode onClick={e => changetheme("dark")} className='h-6 w-6 cursor-pointer text-gray-900 dark:text-white' />)
                    }
                </div>
            </div>

            {/* mobile navbar */}

            <div className={`  transition-all duration-300 ease-in-out ${visible ? (" dark:bg-[#111827] bg-[#FBE8EE]") : ("")}  fixed top-0 z-40  w-screen lg:hidden`}>


                <div className=' flex items-center justify-between py-4 px-5 w-full'>

                    <div>
                        <img
                            src="/assets/images/logoDark.png"
                            className=" dark:opacity-100 dark:hidden pointer-events-none h-8 w-[25px] -mt-1"
                        />
                        <img
                            src="/assets/images/logoLight.png"
                            className=" dark:opacity-100 dark:block hidden pointer-events-none h-8 w-7 -mt-1"
                        />
                    </div>


                    <div className="menuItem cursor-pointer  right-6 items-center w-7 col-span-1 space-y-1 " onClick={toggleNavbar}  >
                        <span className="top h-[3px] rounded-sm bg-[#111827] dark:bg-[#FBE8EE]"></span>
                        <span className="middle h-[3px] rounded-sm bg-[#111827] dark:bg-[#FBE8EE] "></span>
                        <span className="bottom h-[3px] rounded-sm bg-[#111827] dark:bg-[#FBE8EE] "></span>
                    </div>

                </div>
                <div ref={mobileNavbar} className='translate-x-full transition-all duration-500 ease-in-out absolute containerDiv h-screen w-screen py-8 px-12'>

                    <div className='items-center cursor-pointer fixed right-4' >
                        {test === "dark" ?
                            (<MdDarkMode onClick={e => changetheme("light")} className='h-10 w-10 cursor-pointer text-gray-900 dark:text-white' />) : (<MdLightMode onClick={e => changetheme("dark")} className='h-10 w-10 cursor-pointer text-gray-900 dark:text-white' />)
                        }
                    </div>

                    <div className='grid grid-cols-1 gap-y-10'>



                        <Link href={"/"}>
                            <p className={`text-gray-900 dark:text-white text-5xl cursor-pointer font-medium ${routePath === "/" ? "text-border" : ""}`}>
                                Home
                            </p>
                        </Link>

                        <Link href={"/about"}>
                            <p className={`text-gray-900 dark:text-white text-5xl cursor-pointer font-medium ${routePath === "/about" ? "text-border" : ""}`}>
                                About
                            </p>

                        </Link>

                        <Link href={"/projects"}>
                            <p className={`text-gray-900 dark:text-white text-5xl cursor-pointer font-medium ${routePath === "/projects" ? "text-border" : ""}`}>
                                Projects
                            </p>
                        </Link>

                        <Link href={"/contact"}>
                                <p className={`text-gray-900 dark:text-white text-5xl cursor-pointer font-medium ${routePath === "/contact" ? "text-border" : ""}`}>
                                    Contact
                                </p>
                        </Link>
                        <Link href={"/resume"}>
                                <p className={`text-gray-900 dark:text-white text-5xl cursor-pointer font-medium ${routePath === "/resume" ? "text-border" : ""}`}>
                                    Resume
                                </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar