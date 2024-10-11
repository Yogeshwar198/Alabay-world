import React, { useState } from 'react';
import alabayguardprev21 from '../../assets/AlabayGames/alabay guard prev 2 1.png';
import { useNavigate } from 'react-router-dom';
import image2 from '../../assets/AlabayGames/alabay lost heritage prev 1.png';

const Games = () => {

    const navigate = useNavigate(); // Initialize navigate hook

    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of images for the slider
    const images = [alabayguardprev21, image2];

    // Array of routes corresponding to each image
    const gameRoutes = [
        '/game-details/alabay-guardian',  // First image route
        '/game-details/alabay-heritage' // Second image route
    ];


    // Handle click for the DISCOVER button
    const handleDiscoverClick = () => {
        navigate(gameRoutes[currentIndex]); // Navigate to the corresponding game details page
    };

    // Handle next image (right arrow click)
    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop to the first image after the last
    };

    // Handle previous image (left arrow click)
    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        ); // Loop to the last image when on the first
    };


    return (
        <div className='relative'>
            {/* Radial Gradient Background */}
            <div className='p-10 sm:p-20 md:p-36 -mt-40 sm:-mt-72'
                style={{
                    background: 'radial-gradient(30.64% 32.66% at 47.77% 66.92%, #FFF280 0%, #FFC700 100%)',
                    clipPath: 'polygon(0 10%, 100% 0, 100% 95%, 0% 70%)',
                }}
            >
                {/* Title and Subtitle */}
                <div className='text-center mb-20 sm:mb-40 md:mb-80 pt-20 sm:pt-40'>
                    <h1 className='text-5xl md:text-7xl lg:text-9xl font-bold text-white'>GAMES</h1>
                    <h2 className='text-lg md:text-2xl lg:text-4xl font-bold text-[#353535]'>Stay tuned for upcoming games!</h2>
                </div>
            </div>

            {/* Image and SVG Icon */}
            <div className='relative flex justify-center -mt-40 sm:-mt-80 md:-mt-96 pt-16 sm:pt-24 md:pt-10'>
                <div className='relative'>
                    {/* Game Image */}
                    <img
                        className='max-w-[80vw] md:max-w-[70vw] lg:max-w-[90vw] max-h-[65vh] md:max-h-[85vh] object-cover border-4 border-white rounded-3xl'
                        src={images[currentIndex]}
                        alt="Alabay Game Preview"
                    />

                    {/* SVG Icon positioned on the right side of the image */}
                    <div className='absolute top-1/2 -translate-y-1/2 right-[10px] sm:right-[-50px] md:right-[20px]'>
                        <div className='bg-[#353535] hover:bg-black h-full px-2 py-2 md:py-5 rounded-3xl mt-12'
                            style={{
                                boxShadow: '8px 9px 19px 0px #000000A6'
                            }}
                            onClick={handleNextImage}
                        >
                            <svg
                                className='h-8 lg:h-12 font-extrabold cursor-pointer'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 -960 960 960"
                                fill="white"
                            >
                                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* DISCOVER Button */}
                <div className="absolute bottom-2 sm:bottom-[40px] left-1/2 transform -translate-x-1/2">
                    <button className="bg-[#843AFC] text-white text-[10px] md:text-lg flex gap-4 items-center font-bold px-6 sm:px-8 py-1 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
                        style={{
                            backgroundColor: currentIndex === 1 ? '#45D689' : '#843AFC', // Change background color based on currentIndex
                        }}
                        onClick={handleDiscoverClick} // Add click handler
                    >
                        DISCOVER
                        <svg
                            className='h-6 lg:h-10'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            fill="white"
                        >
                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                        </svg>
                    </button>

                </div>

            </div>
        </div>
    );
}

export default Games;
