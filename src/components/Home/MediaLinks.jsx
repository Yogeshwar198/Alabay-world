import React from 'react'
import socalmedia from '../../assets/socalmedia.png'
import ChatBox from './ChatBox'


const MediaLinks = () => {
    return (
        <div className='bg-white pt-20 sm:pt-40 pl-20 pb-20 md:pb-40'>
            {/* mt-20  */}
            <h1 className='text-[#FFA800] text-4xl sm:text-6xl md:text-8xl font-bold'>social media <br />links</h1>
            <div className='flex flex-col sm:flex-row sm:gap-9 lg:gap-16 xl:gap-24 justify-center'>

                {/* Chat component */}
                <div className='mt-10 sm:mt-32 md:mt-52'>
                    <ChatBox />
                </div>

                <img src={socalmedia}
                    className='max-w-[50vw] md:max-w-1/2 max-h-[55vh] md:max-h-[80vh] lg:max-h-[100vh]'
                    alt="" />
            </div>
        </div>
    )
}

export default MediaLinks