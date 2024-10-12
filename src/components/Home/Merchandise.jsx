import React, { useState } from 'react'
import backPinktee from '../../assets/AlabayMerch/pink tee bck.png'
import pinktshirt from '../../assets/AlabayMerch/pink tshirt.png'

import blackhoodiebg from '../../assets/AlabayMerch/black hoodie bck.png'
import blckhoodie from '../../assets/AlabayMerch/black hoodie.png'
import bluecapbg from '../../assets/AlabayMerch/blue cap bck.png'
import bluecap from '../../assets/AlabayMerch/cap mockup.png'
import yellowtshirtbg from '../../assets/AlabayMerch/yellow tee bck.png'
import yellowtshirt from '../../assets/AlabayMerch/yellow tshirt.png'

const Merchandise = () => {
    // Arrays of background and overlay images
    const backgroundImages = [backPinktee, blackhoodiebg, bluecapbg, yellowtshirtbg]; // Add all 4 background images
    const overlayImages = [pinktshirt, blckhoodie, bluecap, yellowtshirt]; // Add all 4 overlay images

    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handler to go to the next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Handler to go to the previous image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='bg-white -mt-96'>
            {/* Heading */}
            <h1 className='text-[#FFA800] mt-80 text-center text-4xl sm:text-5xl md:text-7xl lg:text-9xl'>MENCHADISE</h1>

            {/* Image Section */}
            <div className='p-10 sm:p-20'>
                <div className='relative z-10'>
                    {/* Background image */}
                    <img
                        className='max-w-[75vw] sm:mx-auto'
                        src={backgroundImages[currentIndex]} alt="" />

                    {/* Overlay image */}
                    <img
                        className='absolute -top-4 sm:-top-12 max-w-[80vw] mx-auto'
                        src={overlayImages[currentIndex]} alt="" />
                    <p className='absolute md:top-32 top-8 right-6 sm:top-24 sm:right-10 md:right-22 xl:top-40 xl:right-48 text-[10px] md:text-[20px] font-bold'>Coming Soon...</p>

                    {/* Left arrow */}
                    <svg
                        onClick={handlePrev}
                        className='absolute top-20 sm:top-40 md:top-60 lg:top-70 left-5 xl:top-80 md:left-20 h-8 md:h-12 rounded-full p-1 bg-white cursor-pointer'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#5f6368">
                        <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
                    </svg>

                    {/* Right arrow */}
                    <svg
                        onClick={handleNext}
                        className='absolute top-20 sm:top-40 md:top-60 lg:top-70 xl:top-80 right-10 md:right-20 h-8 md:h-12 rounded-full p-1 bg-white cursor-pointer'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#5f6368">
                        <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Merchandise;
