import React from 'react';
import artifacts from "../../assets/AlabayGames/artifacts 2.png"
import abilities from '../../assets/AlabayGames/Abilities 2.png'
import alabayguard from '../../assets/AlabayGames/image 3 alabay guard 2.png'

const GamePreviews = () => {
  return (
    <div className='bg-white -mt-[500px] sm:-mt-[450px] pt-96'>
      <h1 className='pt-40 md:text-start text-center md:pl-24 font-extrabold sm:text-3xl'><span className='text-[#FFA800]'>GAME</span> PREVIEWS</h1>
      <div className='flex gap-2 md:gap-6 justify-center items-center p-5'>
        <img className='max-w-[22vw] max-h-[22vw]' src={artifacts} alt="" />
        <img className='max-w-[22vw] max-h-[22vw]' src={abilities} alt="" />
        <img className='max-w-[22vw] max-h-[22vw]' src={alabayguard} alt="" />
        <div className='bg-[#353535] hover:bg-black cursor-pointer h-full px-2 py-4 md:py-6 rounded-3xl'
          style={{
            boxShadow: '8px 9px 19px 0px #000000A6'
          }}
        >
          <svg className='min-h-6 md:min-h-12 font-bold ' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
        </div>
      </div>
    </div>
  );
}

export default GamePreviews;
