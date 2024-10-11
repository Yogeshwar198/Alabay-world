import React from 'react'
import chat from '../../assets/chat.png'
import twitter from '../../assets/twitter logo 1.png'
import telegram from '../../assets/Mask group.png'

const ChatBox = () => {
  return (
    <div className='relative'>
      <img className='max-w-[200px] sm:max-w-[32vw] md:max-w-[29vw] max-h-[32vh] sm:max-h-[35vh] md:max-h-[40vh]' src={chat} alt="" />
      <div className='absolute top-0 p-4 sm:p-6 xl:p-8 text-white text-[12px] sm:text-base lg:text-xl font-bold'>
      <a href="https://x.com/?lang=en" className='flex justify-center items-center gap-2 lg:gap-4' target='_blank'>
        <img className='bg-black rounded-full p-2 w-8 md:w-12 lg:w-16 mb-4' src={twitter} alt="" />
        Twitter Link</a>
      <a href="https://telegram.org/" className='flex justify-center items-center gap-4' target='_blank'>
        <img className='bg-black rounded-full p-2 w-8 md:w-12 lg:w-16' src={telegram} alt="" />
        Telegram Link</a>
    </div>
    </div>
  )
}

export default ChatBox