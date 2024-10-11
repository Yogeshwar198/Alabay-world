import React, { useState } from 'react';
import Hero from '../components/Home/Hero';
import History from '../components/Home/History';
import ImageSlider from '../components/Home/ImageSlider';
import ProjectVision from '../components/Home/ProjectVision';
import RoadMap from '../components/Home/RoadMap';
import EventLaunch from '../components/Home/EventLaunch';
import Tokenomics from '../components/Home/Tokenomics';
import Merchandise from '../components/Home/Merchandise';
import Games from '../components/Home/Games';
import GamePreviews from '../components/Home/GamePreviews';
import MediaLinks from '../components/Home/MediaLinks';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false); // Manage hover state

  // Function to handle hover event (mouse enters the div)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Hero />

      {/* Content div with dynamic top position based on hover state */}
      <div
        className={`relative md:absolute lg:left-5 ${
          isHovered ? 'md:top-10' : 'md:top-[92vh]'
        } md:h-[calc(100vh-40px)] overflow-none md:overflow-y-auto flex flex-col md:rounded-lg transition-all duration-500 ease-in-out`} 
        onMouseEnter={handleMouseEnter} // Hover to move to top-10
        onMouseLeave={handleMouseLeave} // Reset position when mouse leaves
      >
        <History />
        <ImageSlider />
        <ProjectVision />
        <RoadMap />
        <EventLaunch />
        <Tokenomics />
        <Merchandise />
        <Games />
        <GamePreviews />
        <MediaLinks />
      </div>
    </div>
  );
};

export default Home;
