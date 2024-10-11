import React from 'react';
import history from '../../assets/history.png'

const History = () => {
  return (
    <div className='h-full mt-40 md:mt-0'>
      {/* Background Section */}
      <div className='min-w-[100vw] sm:min-w-[97.5vw] min-h-[40vh] md:min-w-[95vw] md:min-h-[120vh] p-4 rounded-lg z-0'
        style={{
          background: 'radial-gradient(42.38% 44.19% at 50.14% 67.33%, #FFF280 0%, #FFC700 100%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0% 70%)',
        }}
      >
        <div className='w-24 h-3 hidden md:block bg-[#FFF6A1] rounded-lg mx-auto'></div>
      </div>
      {/* Content Section */}
      <div className=''>

        <div className='absolute left-8 top-48 md:top-20'>
          {/* Image */}
          <img className='w-1/2' src={history} alt="" />

        </div>
         {/* Text Content */}
        <div className='w-1/2 absolute top-48 md:top-16 right-12 sm:right-20 text-right'>
          <h1><span className='text-red-500 md:text-5xl lg:text-6xl xl:text-7xl'>History Of</span>  <br /> <span className='md:text-5xl lg:text-7xl xl:text-9xl'>ALABAY</span></h1>
          <p className='text-[10px] md:text-2xl lg:text-3xl font-semibold'>The Central Asian Shepherd Dog, <br /> also known as Alabay, has been a <br /> guardian of livestock and property <br /> for centuries. Originating from <br /> Central Asia, these dogs are <br /> renowned for their courage, <br /> strength, and loyalty.</p>
        </div>
      </div>
    </div>
  );
};

export default History;
