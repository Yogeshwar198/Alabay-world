import React from 'react';
import tokenomics from '../../assets/tokenomics.png'

const Tokenomics = () => {
    return (
        <div>
            {/* background div */}
            <div className='pt-28 pb-60 -mt-28'
                style={{
                    // Setting the radial gradient as background
                    background: 'radial-gradient(30.64% 32.66% at 47.77% 66.92%, #FFF280 0%, #FFC700 100%)',
                    clipPath: 'polygon(0 10%, 100% 0, 100% 95%, 0% 70%)', // Symmetrical cut for top and bottom
                }}
            >
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white pl-10'>TOKENOMICS</h1>

                {/* Container for content */}
                <div className='flex flex-col md:flex-row gap-8 lg:gap-24 justify-center items-center lg:items-start px-4 md:px-8 lg:px-16'>

                    {/* Left section with text */}
                    <div className='flex flex-col gap-4 md:gap-6 font-bold pt-20'>
                        <p className='px-12 py-3 bg-[#353535] text-white rounded-3xl sm:text-[20px] lg:text-xl shadow-[#A87D29] shadow-[5px_5px_5px_0_rgba(0,0,0,0.2)]'
                        >
                            LIQUIDITY <br />
                            <span className='lg:text-4xl text-[#FFF280]'>LOCKED</span>
                        </p>
                        <p className='px-12 py-3 bg-[#353535] text-white rounded-3xl sm:text-[20px] lg:text-xl shadow-[#A87D29] shadow-[5px_5px_5px_0_rgba(0,0,0,0.2)]'
                        >
                            CONTRACT <br />
                            <span className='lg:text-4xl text-[#FFF280]'>RENOUNCED</span>
                        </p>
                        <p className='px-12 py-3 bg-[#353535] text-white rounded-3xl sm:text-[20px] lg:text-xl shadow-[#A87D29] shadow-[5px_5px_5px_0_rgba(0,0,0,0.2)]'
                        >
                            TAXES <br />
                            <span className='lg:text-4xl text-[#FFF280]'>0%</span>
                        </p>
                    </div>

                    {/* Right section with image */}
                    <div className='w-full lg:w-1/2 flex justify-center'>
                        <img className='max-w-1/2 max-h- sm:max-h-[75vh] md:max-h-[90vh]' src={tokenomics} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tokenomics;
