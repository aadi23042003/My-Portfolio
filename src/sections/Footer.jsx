import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GiThumbUp } from 'react-icons/gi'

const Footer = () => {
  return (
    <div id='footer' className='h-[30vh] w-full bg-linear-to-r flex flex-col justify-center items-center text-cyan-100 from-neutral-900 via-blue-950 to-neutral-900'>
      <h1 className='text-4xl font-bold bg-linear-to-r text-transparent from-pink-500 via-purple-700 to-pink-600 bg-clip-text'>Aditya Rao</h1>
      <p className='text-3xl flex gap-4 p-3'><a href="https://github.com/aadi23042003?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </p>
      <h3 className='font-semibold tracking-tight'>&copy; 2026 Aditya Rao. All rights reserved.</h3>
      
    </div>
  )
}

export default Footer