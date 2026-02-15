import { motion, useMotionValue } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'
import { DiDjango } from 'react-icons/di'
import { FaBootstrap, FaCss3Alt, FaGithub, FaPython } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoReact } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiMysql } from 'react-icons/si'
import { TiHtml5 } from 'react-icons/ti'

const Skills = () => {
  let skills=[
    {name:'HTML',icon:<TiHtml5 />},
    {name:'CSS',icon:<FaCss3Alt />},
    {name:'JavaScript',icon:<IoLogoJavascript />},
    {name:'Bootstrap',icon:<FaBootstrap />},
    {name:'Tailwind CSS',icon:<RiTailwindCssFill />},
    {name:'React',icon:<IoLogoReact />},
    {name:'Python',icon:<FaPython />},
    {name:'Django',icon:<DiDjango />},
    {name:'Github',icon:<FaGithub />},
    {name:'MySQL',icon:<SiMysql />},
  ]
  const repeat=[...skills,...skills];
  const [dir,setDir]=useState(-1)
  const [active,setActive]=useState(false)
  const secRef=useRef(null);
  const scrollRef=useRef(null);
  const touchY=useRef(null);
  const x=useMotionValue(0);
  useEffect(()=>{
    const el=secRef.current;
    if(!el) return;
    const io=new IntersectionObserver(([entry])=>{
      setActive(entry.isIntersecting && entry.intersectionRatio>=0.1);
    },{threshold:0.1})
    io.observe(el);
    return ()=>io.disconnect(el);
  },[])
  useEffect(()=>{    if(!active) return;
    const onwheel=(e)=>{
      if(e.deltaY>0) setDir(-1);
      else setDir(1);
    }
    const onTouchStart=(e)=>{
      touchY.current=e.touches[0].clientY;
    }
    const onTouchMove=(e)=>{
      if(touchY.current == null) return;
      const delta= e.touches[0].clientY - touchY.current;
      setDir(delta>0?1:-1);
      touchY.current=e.touches[0].clientY;
      
    }
    window.addEventListener('wheel',onwheel,{passive:true});
    window.addEventListener('touchstart',onTouchStart,{passive:true});
    window.addEventListener('touchmove',onTouchMove,{passive:true});
    return ()=>{
      window.removeEventListener('wheel',onwheel);
      window.removeEventListener('touchstart',onTouchStart);
      window.removeEventListener('touchmove',onTouchMove);
    }
  },[active])
  useEffect(()=>{
    let id;
    let last=performance.now();
    const Speed=80;
    const tick=(now)=>{
      const dt=(now-last)/1000;
      last=now;
      let next=x.get() + dir*dt*Speed;
      const loop=scrollRef.current?scrollRef.current.scrollWidth/2:0 || 0;
      if(loop){
        if(next<-loop) next+=loop;
        if(next>0) next-=loop;

      }
      x.set(next);
      id=requestAnimationFrame(tick);

    }
    id=requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(id);
  },[dir,x])

  return (
    <div ref={secRef} id='skills' className='h-[70vh] md:h-2/3 w-full bg-neutral-950 relative overflow-hidden flex flex-col items-center gap-10'>
      
        
          <div className='absolute w-72 md:w-[250px] h-96 md:h-[300px] blur-[80px] opacity-30 left-0 rounded-[30%] bg-blue-500 animate-pulse'></div>
        <div className='absolute w-72 md:w-[250px] h-96 md:h-[300px] blur-[80px] opacity-30 rounded-[30%] right-0 top-44 bg-blue-500 animate-pulse'></div>
      
        
        
          <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:1}} viewport={{once:true,amount:0.7}} className='text-3xl md:text-4xl mt-20 tracking-tight font-bold text-center text-transparent bg-linear-to-r from-pink-500 via-purple-300 to-blue-600 bg-clip-text drop-shadow-lg'>My Skills</motion.h2>
        <div className='relative w-full'>
          <motion.div ref={scrollRef} className='flex gap-8 w-full mb-5' style={{x,whiteSpace:'nowrap',willChange:'transform'}} >
            {repeat.map((item,idx)=>(
              <div key={idx} aria-label={item.name} title={item.name} className='min-w-[150px] h-[150px] md:min-w-[120px] md:min-h-[120px] flex flex-col overflow-hidden justify-center items-center gap-2 text-xs md:text-sm p-4 text-blue-500 font-semibold bg-transparent border border-cyan-100/5 rounded-full shadow-2xl hover:scale-120 '>
                <div className='text-4xl'>{item.icon}</div>
                <div>{item.name}</div>
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
  )
}

export default Skills