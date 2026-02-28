import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    }
  },[])
  return (
    <div className='hidden lg:fixed pointer-events-none top-0 left-0 z-[0px]' style={{transform: `translate(${position.x-30}px,${position.y-30}px)`}}>
      <div className='w-15 h-15 rounded-full bg-linear-to-r from-pink-500 to-blue-400 opacity-20 shadow-[5px_5px_10px_rgba(0,0,0,0.2)]'/>
      </div>
  )
}

export default CustomCursor