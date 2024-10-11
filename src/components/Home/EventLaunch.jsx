import React from 'react';
import community_building from '../../assets/community_building.png';
import community_events from '../../assets/community_events.png';
import merchandise from '../../assets/merchandise.png';
import expansion from '../../assets/expansion.png';

const EventLaunch = () => {
    return (
        
        <div className='w-full flex flex-wrap gap-5 justify-center bg-white md:pt-40 pb-20'>
            {/* First card with gradient overlay */}
            <div className="rounded-tl-3xl relative"
                style={{
                    background: 'linear-gradient(180deg, #DBC70C 0%, rgba(255, 242, 128, 0) 100%)',
                }}
            >
                <h1 className='text-center text-white font-bold leading-4 pt-4'><span className='text-xl sm:text-2xl leading-6'>Community <br />
                    Building</span>   <br />
                    and Initial Launch</h1>
                <div className='relative p-4'>
                    <img className='max-w-[28vw] max-h-[50vh] pt-5' src={community_building} alt="" />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(0deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0) 60%)',
                        }}
                    />
                </div>
            </div>

            {/* Second card */}
            <div className='relative'
                style={{ background: 'linear-gradient(180deg, #00D4D4 0%, rgba(65, 255, 255, 0) 100%)', }}
            >
                <h1 className='text-center text-white font-bold leading-4 pt-4'> <span className='text-xl sm:text-2xl leading-6'>Merchandise</span> <br />
                    Store Launch</h1>
                <div className='relative p-4'>
                    <img className='max-w-[28vw] max-h-[50vh] pt-5' src={merchandise} alt="" />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(0deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0) 60%)',
                        }}
                    />
                </div>
            </div>

            {/* Third card */}
            <div className='relative'
                style={{ background: 'linear-gradient(180deg, #D427FF 0%, rgba(212, 39, 255, 0) 100%)', }}
            >
                <h1 className='text-center text-white font-bold leading-4 pt-4'><span className='text-xl sm:text-2xl leading-6'> Community <br />
                    Events </span><br />
                    and contests</h1>
                <div className='relative p-4'>
                    <img className='max-w-[28vw] max-h-[50vh]' src={community_events} alt="" />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(0deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0) 60%)',
                        }}
                    />
                </div>
            </div>

            {/* Fourth card */}
            <div className="rounded-tr-3xl relative"
                style={{ background: 'linear-gradient(179.53deg, #8F3A3C 0.41%, rgba(143, 58, 60, 0) 95.85%)', }}
            >
                <h1 className='text-center text-white font-bold leading-4 pt-4'><span className='text-xl sm:text-2xl leading-6'>Expansion <br />
                    and New </span><br />
                    Features</h1>
                <div className='relative p-4'>
                    <img className='max-w-[28vw] max-h-[50vh]' src={expansion} alt="" />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(0deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0) 60%)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default EventLaunch;
