import React from 'react'
import road_map from '../../assets/road_map.png'

const RoadMap = () => {
    return (
        <div className='h-full w-full -mt-10'>
            <div className='relative p-10'>
                <h1 className='font-extrabold text-4xl md:text-6xl lg:text-8xl absolute -top-5 md:text-white'>ROAD MAP</h1>
            </div>
            <div className='bg-white min-h-[80vh]'>
                <img src={road_map} className='absolute max-h-[50vh] max-w-[40vw] sm:max-h-[60vh] sm:max-w-[50vw] md:max-h-[70vh] md:max-w-[60vw] lg:max-h-[90vh] lg:max-w-[80vw] right-40 sm:right-20' alt="" />
                <div className='relative top-48 pl-10 md:pl-20 text-2xl font-bold leading-6'>
                    <p className='text-[#353535] text-[18px] md:text-[20px]  lg:text-[26px]'>Our journey is just beginning. <br /> Explore our roadmap to see the <br /> exciting milestones and future <br /> plans we have in store. </p>
                    <p className='text-[#FFA800] text-[18px] md:text-[20px]  lg:text-[26px] pt-5'>Join us as we grow and achieve <br /> new heights.</p>
                </div>
            </div>
        </div>
    )
}

export default RoadMap