import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useMemo, useState } from 'react'

const IntroAnimation = () => {
  let greet=useMemo(()=>[
    'Hello','Welcome','To','My','Portfolio'
  ],[])
  let [index,setIndex]=useState(0);
  let [status,setStatus]=useState(1); // To show or not
  useEffect(() => {
    let timeout=setTimeout(() => {
      if(index<greet.length){
        setIndex(v=>v+1);
      }
      
    },200)
    let timeout2=setTimeout(() => {
      setStatus(0);
    },1000 + greet.length*100)
    return ()=>clearTimeout(timeout);
  },[index,greet]);
  return (
    <AnimatePresence >
      {status && (
      <motion.div initial={{opacity:1}} animate={{opacity:1,y:0}} transition={{duration:1}} exit={{opacity:1,y:-1500}} className='w-full h-screen z-500 bg-neutral-950 fixed flex flex-col justify-center items-center text-4xl sm:text-5xl md:text-6xl font-bold text-white'>
      <motion.h1 initial={{opacity:1,y:-20}} animate={{opacity:1,y:0}} transition={{duration:1,ease:[0.21,1,0.41,1],}} exit={{opacity:1,y:10}} className='overflow-hidden'>{greet[index]}</motion.h1>
    </motion.div>
    )

    }
    </AnimatePresence>
  )
}

export default IntroAnimation