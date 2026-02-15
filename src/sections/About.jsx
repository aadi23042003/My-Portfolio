import { motion } from 'motion/react'
import React from 'react'
import img from "../assets/Aditya.png"
import CustomCursor from '../components/CustomCursor'
const About = () => {
  let stylee=[
    'absolute -top-12 left-10 w-[200px] h-[300px] opacity-30 blur-[100px] animate-pulse animation-delay-2000',
    'absolute top-1/2 left-4/5 opacity-30 w-[200px] h-[300px] blur-[120px] animate-pulse animation-delay-4000',
  ]
  return (
    <div id='about' className='min-h-screen relative w-full overflow-hidden bg-neutral-950 flex flex-col justify-center items-center z-10'>
      <CustomCursor/>
      <div className='absolute inset-0 pointer-events-none'>
        {stylee.map((item,idx)=>(
          <div key={idx} className={`${item} bg-linear-to-r from-cyan-100 via-blue-400 to-blue-600 rounded-full`}></div>
        ))}
      </div>
      <div className='w-full md:w-[80vw] bg-transparent p-2 md:p-4 flex flex-col md:flex-row justify-center items-center gap-4 relative z-10'>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:1}} viewport={{once:false,amount:0.7}} className='w-[75%] md:w-1/3 min-h-full flex flex-col md:flex-row relative md:items-stretchp-4 md:p-8 overflow-y-auto justify-center items-center'>
         <img src={img} alt="Profile" className='mx-auto md:mx-2 hover:scale-110 w-[50%] sm:w-[40%] min-h-[60%] md:w-40 relative md:h-40 rounded-3xl object-cover overflow-hidden border border-emerald-300 shadow-2xl bg-linear-to-br from-neutral-500 to-neutral-900' />
        </motion.div>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:1}} viewport={{once:false,amount:0.7}} className='flex flex-1 flex-col justify-center gap-1'>
          <h2 className='ms-0 text-4xl lg:5xl tracking-tight text-transparent font-semibold bg-linear-to-r from-pink-500 via-purple-700 to-blue-600 bg-clip-text drop-shadow-lg'>Aditya Rao</h2>
          <h2 className='text-cyan-200 text-xl lg:text-xl'>Full Stack Developer</h2>
          <p className='text-gray-300 hidden md:block text-base'>A driven and detail-oriented Web Developer with hands-on experience in building, testing, and deploying full-stack web applications. Proficient in backend development using Python and the Django framework, complemented by strong frontend skills in HTML, CSS, JavaScript, Bootstrap, Tailwindcss and Reactjs. Possesses practical, real-world experience from a web development internship, demonstrating a strong capacity for problem-solving and a proven ability to translate project requirements into clean, efficient code .</p>
          <div className='hidden md:flex gap-8 mt-3'>
            <a href="#projects" className='text-green-100 hover:text-cyan-200 bg-blue-700 p-2 rounded-lg font-semibold'>View Projects</a>
            <a href="#skills" className='text-black hover:text-neutral-400 font-semibold ml-4 bg-white p-2 rounded-lg'>View Skills</a>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{opacity:0,y:0,scale:0.8}} whileInView={{opacity:1,y:50,scale:1}} transition={{duration:1}} viewport={{once:false,amount:0.7}} className='w-[90vw] md:w-[80vw] h-[30%] bg-transparent p-2 mb-20 md:mb-12 md:p-4 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 relative z-10'>
        <div className="shadow-lg border flex justify-center items-center border-white text-white bg-neutral-800 hover:bg-neutral-700 opacity-80 p-3 h-[20%] md:h-28 w-[80vw] md:w-60 rounded-xl font-bold">Full Stack</div>
        <div className="shadow-lg border flex justify-center items-center border-white text-white bg-neutral-800 hover:bg-neutral-700 opacity-80 p-3 h-[20%] md:h-28 w-[80vw] md:w-60 rounded-xl font-bold">UI/UX</div>
        <div className="shadow-lg border flex justify-center items-center border-white text-white bg-neutral-800 hover:bg-neutral-700 opacity-80 p-3 h-[20%] md:h-28 w-[80vw] md:w-60 rounded-xl font-bold">Problem Solving</div>
      </motion.div>
      
    </div>
  )
}

export default About