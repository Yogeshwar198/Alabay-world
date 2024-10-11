import React from 'react'
import alabayheritage from '../../assets/AlabayGames/Alabay heritage prev gradient.png'
import play_arrow from '../../assets/AlabayGames/play_arrow.png'
import overview from '../../assets/AlabayGames/Alabay Adventure - The Lost Heritage/overview.png'
import abilities from '../../assets/AlabayGames/Alabay Adventure - The Lost Heritage/Abilities.png'
import artifacts from '../../assets/AlabayGames/Alabay Adventure - The Lost Heritage/artifacts.png'
import location from '../../assets/AlabayGames/Alabay Adventure - The Lost Heritage/locations preview.png'
import { useNavigate } from 'react-router-dom'

const AlabayHeritage = () => {

  const navigate = useNavigate(); // Initialize navigate hook
  const handleClick = () => {
    navigate('/'); 
  };

  return (
    <div className='w-full h-screen overflow-hidden relative'>
      {/* Fixed background image */}
      <div className='fixed top-0 left-0 w-full h-full z-0'>
        <img
          className='max-w-full max-h-[140vh] object-cover'
          src={alabayheritage}
          alt="Alabay Guard"
        />
      </div>

      {/* Fixed heading elements */}
      <div className='fixed top-10 left-10 z-10'>
        <h1 className='text-2xl md:text-5xl font-extrabold text-white'>ALABAY HERITAGE</h1>
        <h1 className='text-2xl text-[#90FFAE] font-semibold mt-2 tracking-widest'>THE LOST ADVENTURE</h1>
      </div>

      {/* Scrollable content */}
      <div className='absolute top-[210px] md:top-[125px] bottom-10 left-0 overflow-y-auto p-10 z-10 content1'>
        <div className='w-1/2'>
          <p className='text-lg md:text-white font-semibold leading-5'>
            Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
          </p>
          <button className='bg-[#90FFAE] w-32 px-2 py-2 text-[12px] font-semibold rounded-3xl flex gap-4 items-center mt-5 hover:bg-green-400 relative'>
            <img className='w-6 p-2 fill-white rounded-full bg-black hover:bg-slate-700' src={play_arrow} alt="" />
            PLAY
          </button>
        </div>

        {/* Game Preview Section */}
        <div className='mt-10'>
          <h1 className='text-white text-xl font-bold'><span className='text-[#90FFAE]'>GAME</span> PREVIEW</h1>
          <div className='flex flex-col md:flex-row gap-8 mt-2'>
            <img className='max-h-36 rounded-xl border-2' src={overview} alt="" />
            <img className='max-h-36 rounded-xl border-2' src={abilities} alt="" />
            <img className='max-h-36 rounded-xl border-2' src={artifacts} alt="" />
            <img className='max-h-36 rounded-xl border-2' src={location} alt="" />
          </div>

          {/* Features Section */}
          <div className='pt-10'>
            <h1 className='text-[#90FFAE] font-bold text-xl pb-5'>FEATURES</h1>
            <div className='md:text-white flex flex-col gap-2 font-bold'>
              <p>Explore a variety of landscapes, including <span className='text-[#90FFAE]'>mountains, forests, deserts</span>, and <span className='text-[#90FFAE]'>ancient ruins</span>.</p>
              <p>Use the Alabay's <span className='text-[#90FFAE]'>abilities</span> to solve <span className='text-[#90FFAE]'>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues.</p>
              <p>Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.</p>
              <p>Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.</p>

              {/* Challenge Modes Section */}
              <div>
                <h2>Challenge Modes:</h2>
                <p><span className='text-[#90FFAE]'>- Time Trials</span> : Compete in special timed challenges where the Alabai must navigate through complex mazes or complete puzzles within a time limit.</p>
                <p><span className='text-[#90FFAE]'>- Exploration Mastery</span> : A mode that rewards players for fully exploring every nook and cranny of the game’s world, uncovering all secrets.</p>
              </div>
              <div className='flex gap-10'>
                <button className='bg-black md:bg-white w-32 px-2 py-2 text-[12px] font-semibold rounded-3xl text-white md:text-black flex gap-4 items-center mt-5 relative'>
                  <img className='w-6 p-2 fill-white rounded-full  bg-black hover:bg-slate-700' src={play_arrow} alt="" />
                  PLAY
                </button>
                <button className='border-2 px-12 py-2 text-[12px] font-semibold rounded-3xl md:text-white flex gap-4 items-center mt-5 relative'
                onClick={handleClick}
                >
                  EXIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlabayHeritage