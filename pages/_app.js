import '../styles/globals.css'
import { PageTransition as Transition } from 'next-page-transitions'
import PageTransition from '../components/Pages Transition'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import ThemeState from '../contexts/ThemeState'
import NavbarState from '../contexts/NavbarState'
import NextJSProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    console.clear()
  }, [])

  const setTheme = (theme) => {
    localStorage.setItem("theme", theme)
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }

  }
  const changeTheme = () => {
    const currentTheme = localStorage.getItem("theme")
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  useEffect(() => {

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', e => {
      const theme = e.matches ? "dark" : "light"
      setTheme(theme)
    })

    setTheme(
      !localStorage.theme ?
        window.matchMedia("(prefers-color-scheme: dark)") ?
          "dark" : "light" : localStorage.theme
    )
  }, [])





  return (
    <div>
      <Transition timeout={500} classNames="page-transition">
        <div key={router.pathname} className="h-fit w-full relative  z-10">
          <PageTransition />
          <ThemeState>
            <NavbarState>
              <NextJSProgress
                color="cyan"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
              />
              <Navbar changeTheme={changeTheme} />
              <div className=" h-fit w-full  -mt-20 md:-mt-16 pt-20 md:pt-16 overflow-x-hidden">
                <Component {...pageProps} />
              </div>
            </NavbarState>
          </ThemeState>
        </div>
      </Transition>
      <style jsx global>{`

        .page-transition-enter .page-transition {
          height: 100%;
          width: 100%;
          bottom:0;
        }

        .page-transition-enter-done .page-transition {
          height: 0%;
          width: 100%;
          transition: 500ms;
        }
        .page-transition-enter-active .page-transition {
          height: 100%;
          width: 100%;
          bottom: 0;
          transition: 500ms;
        }
        .page-transition-exit .page-transition {
          bottom: 0;
          height: 100%;
          width: 100%;
          transition: 500ms;
        }
        .page-transition-exit-active .page-transition {
          bottom: 0;
          height: 100%;
          width: 100%;
          transition: 500ms;
        }
      `}</style>
      <script
        id="three-min-js"
        src="/assets/lib/three.min.js"
        async></script>

      <script
        id="fluid-background-js"
        src="/assets/lib/fluid-background.js"
        async
      ></script>
      <script
        type="text/javascript"
        src="/assets/lib/tagcanvas.min.js"
        async
      ></script>
    </div>
  )
}

export default MyApp
