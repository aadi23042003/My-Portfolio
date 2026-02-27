import React, { useState } from 'react'
import ParticlesBackgrounde from '../components/ParticlesBackground'
import ParticlesBackground from '../components/Particles2'
import Astra from '../assets/stra.png'
import { motion } from 'motion/react'
import emailjs from '@emailjs/browser'
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  
  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData(prev => ({...prev, [name]: value}))
    if(errors[name]) setErrors(prev => ({...prev, [name]: ''}))

  }
  const validateForm = () => {
    const requiredFields = ['name', 'email', 'project'];
    const newErrors = {}
    requiredFields.forEach(field => {
      if(!formData[field].trim()) {
        newErrors[field] = 'This field can not be empty'
      }
      if(field === 'name' && formData[field].length<3) {
      newErrors.name = 'Name must be at least 3 characters long'
    }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit =async (e) => {
    e.preventDefault()
    if(!validateForm()) return;
    setStatus('Sending...')
    try {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, {...formData,fromName:formData.name,reply_to:formData.email}, PUBLIC_KEY)
      setStatus('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        project: '',
        message: '',
      })
    } catch (error) {
      console.error('Email sending error:', error)
      setStatus('Failed to send message. Please try again later.')
    }
  }
  return (
    <div id='contact' className='min-h-screen w-full bg-neutral-900 relative text-white overflow-hidden flex flex-col py-20 px-6 md:px-20 md:flex-row items-center gap-10'>
    <ParticlesBackground />
      <div className='hidden md:block'>
        <motion.img initial={false} animate={{x:0,y:0}} transition={{duration:1.5,repeat:Infinity,repeatType:"reverse",ease:'easeInOut'}}
   src={Astra} alt="Astra Logo" className='w-64 h-96 relative rotate-x-180 img'/>
      </div>
      <div className='bg-white/10 p-3 rounded-lg flex flex-col opacity-90 min-h-[70vh] w-[80%] md:w-[40%] relative md:absolute md:left-1/2 mt-4 md:mt-12'>
        <h1 className='text-3xl mx-auto font-bold text-transparent bg-linear-to-r from-pink-500 via-pink-800 to-purple-700 bg-clip-text'>Contact Me</h1>
        <form action="" className='flex flex-col gap-3' onSubmit={handleSubmit}>
              <label className='text-xl font-semibold' htmlFor="name">Name <span className='text-red-600'>*</span></label>
              <input placeholder='enter your name' value={formData.name} onChange={handleChange} className='border-2 p-2 h-10 border-white rounded-lg' type="text" name="name" id="name" />
              {errors.name && <span className='text-red-600 text-sm'>{errors.name}</span>}
              <label className='text-xl font-semibold' htmlFor="email">Email <span className='text-red-600'>*</span></label>
              <input value={formData.email} onChange={handleChange} placeholder='enter email' className='p-2 border-2 h-10 border-white rounded-lg' type="email" name="email" id="email" />
              {errors.email && <span className='text-red-600 text-sm'>{errors.email}</span>}
              <label className='text-xl font-semibold' htmlFor="project">Project <span className='text-red-600'>*</span></label>
              <select value={formData.project} onChange={handleChange} className='border-2 h-10 border-white rounded-lg' name="project" id="project">
                <option className='text-black' value="none" disabled>Select Project</option>
                <option className='text-black' value="Web Development">Web Development</option>
                <option className='text-black' value="App Development">App Development</option>
                <option className='text-black' value="UI/UX Design">UI/UX Design</option>
              </select>
              {errors.project && <span className='text-red-600 text-sm'>{errors.project}</span>}
              <label className='text-xl font-semibold' htmlFor="message">Message <span className='text-lg'>(Project Idea)</span></label>
              <textarea placeholder='enter a message' name="message" id="message" className='border-2 p-2 border-white h-24 rounded-lg'></textarea>
              <motion.button disabled={status === 'Sending...'} whileTap={{scale:0.9}} whileHover={{scale:1.02}} type="submit" className='bg-white text-black font-bold px-4 py-2 rounded-lg mt-4'>{status==='Sending...'?"Sending...":"Submit"}</motion.button>
              {status && <span className={status==='Sending...'?"text-yellow-500":status==='Message sent successfully!'?"text-green-500":"text-red-500"}>{status==='Sending...'?"sending...":status==='Message sent successfully!'?"Message sent successfully✅":"Something went wrong❌"}</span>}
        </form>
      </div>
    </div>
  )
}
export default Contact