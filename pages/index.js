
import Head from 'next/head'
import HomePage from '../components/Home Page'
import About from '../components/about'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Animation from '../components/Animation'
import Footer from '../components/footer'


export default function Home() {


  return (
    <>
      <div className='w-full h-fit transition-all duration-300 ease-in-out bg-[#FBE8EE] dark:bg-black'>
        <Head>
          <title>Home-Sisir</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta name="title" content="Home-Sisir" />
          <meta
            name="description"
            content="I'am a Full-stack Web developer who loves to build cool websites with beautiful designs. I love new challenges and problems and to code."
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Home-Sisir" />
          <meta
            property="og:description"
            content="I'am a Full-stack Web developer who loves to build cool websites with beautiful designs. I love new challenges and problems and to code."
          />

          <meta
            property="og:image"
            content="https://sisirdhakal.vercel.app/assets/images/Home.webp"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Home / Sisir" />
          <meta
            property="twitter:description"
            content="I'am a Full-stack Web developer who loves to build cool websites with beautiful designs. I love new challenges and problems and to code."
          />

          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
        </Head>
        <HomePage />
        <Animation>
          <About />
          <Projects />
          <Contact />
        </Animation>
        <Footer />
      </div>
    </>
  )
}

