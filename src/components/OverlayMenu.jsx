import { AnimatePresence, motion } from 'motion/react'
import React from 'react'
const OverlayMenu = ({isOpen, onClose}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{x:-1500}} animate={{x:0}} transition={{duration:0.5,ease:"easeInOut"}} className='fixed inset-0 text-white bg-black bg-opacity-90 flex flex-col justify-center items-center z-150'>
          <button className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer' onClick={onClose}>&times;</button>
          <ul className='space-y-6 text-center'>
          {[
            'Home',
            'About',
            'Skills',
            'Projects',
            'Contact'
          ].map((item,idx) => (
            <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.7+idx*0.1}} key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={onClose} className='text-3xl text-white font-semibold hover:text-pink-400 transition-colors duration-300'>{item}</a>
              </motion.li>
))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default OverlayMenu