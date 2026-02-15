import { useState } from 'react'


import Navbar from './components/Navbar'

import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'
import IntroAnimation from './components/IntroAnimation'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='relative gradient'>
    <IntroAnimation/>
    <CustomCursor/>
    <Navbar />
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    
    <Contact/>
    <Footer/>
   </div>
  )
}

export default App
