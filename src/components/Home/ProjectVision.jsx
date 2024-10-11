import React from 'react'
import project_vision from '../../assets/project_vision.png'

const ProjectVision = () => {
    return (
        <div className='relative'>
            <div className='bg-white h-[100vh] text-center'>
                <h1 className='text-5xl md:text-7xl lg:text-9xl text-[#FFA800] pb-20'>PROJECT VISION</h1>
                <img src={project_vision} className='absolute z-10 top-10 sm:mt-36 max-h-[120vh] max-w-[95vw]' alt="" />
            </div>
            <div className='h-full -mt-[650px] sm:-mt-56 md:-mt-40 xl:-mt-28 p-10'
                style={{
                    background: 'radial-gradient(30.64% 32.66% at 47.77% 66.92%, #FFF280 0%, #FFC700 100%)',
                    clipPath: 'polygon(0 10%, 100% 0, 100% 95%, 0% 70%)', // Symmetrical cut for top and bottom
                }}
            >
                <p className='pt-28 sm:pt-56 pb-40 md:pt-96 md:pb-20 text-xl sm:text-2xl md:text-3xl font-bold text-center'>Our mission is to honor the heritage of the Alabay by creating a
                    <br />vibrant, loyal, and powerful community. Just as the Alabay protects its <br />
                    flock, we aim to build a pack that stands strong together.</p>
            </div>
        </div>
    )
}

export default ProjectVision