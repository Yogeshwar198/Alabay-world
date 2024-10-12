import React, { useState } from 'react';

// Placeholder items (replace with actual image/video paths)
const items = [
  { id: 1, type: 'photo', text: 'PHOTO 1', src: 'path_to_image_1' },
  { id: 2, type: 'video', text: 'VIDEO 1', src: 'path_to_video_1' }, 
  { id: 3, type: 'photo', text: 'PHOTO 2', src: 'path_to_image_2' },
  { id: 4, type: 'video', text: 'VIDEO 2', src: 'path_to_video_2' },
  { id: 5, type: 'photo', text: 'PHOTO 3', src: 'path_to_image_3' },
  { id: 6, type: 'video', text: 'VIDEO 3', src: 'path_to_video_3' },
  { id: 7, type: 'photo', text: 'PHOTO 4', src: 'path_to_image_4' },
  { id: 8, type: 'video', text: 'VIDEO 4', src: 'path_to_image_4' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index for items
  const [selectedTab, setSelectedTab] = useState('all'); // Track selected tab ("all", "photos", "videos")

  // Function to handle next items (move by 3 at a time)
  const handleNextItems = () => {
    const filteredItems = getFilteredItems();
    const totalItems = filteredItems.length;

    // Move to the next set of 3 items, and reset if at the end
    setCurrentIndex((prevIndex) => (prevIndex + 3) % totalItems);
  };

  // Function to filter items based on the selected tab
  const getFilteredItems = () => {
    if (selectedTab === 'photos') {
      return items.filter(item => item.type === 'photo'); // Only photos
    } else if (selectedTab === 'videos') {
      return items.filter(item => item.type === 'video'); // Only videos
    }
    return items; // All (photos + videos)
  };

  // Function to calculate the three items to display
  const getDisplayedItems = () => {
    const filteredItems = getFilteredItems();
    const totalItems = filteredItems.length;

    // Display exactly 3 items at a time
    return [
      filteredItems[currentIndex % totalItems],
      filteredItems[(currentIndex + 1) % totalItems],
      filteredItems[(currentIndex + 2) % totalItems],
    ];
  };

  return (
    <div className='bg-white md:min-w-[80vw] p-24 -mt-12'>

      {/* Navigation for All, Photos, and Videos */}
      <div className='flex justify-center gap-6'>
        <h2
          className={`text-center text-[15px] md:text-xl font-bold my-8 cursor-pointer ${selectedTab === 'all' ? 'text-[#FFA800]' : ''}`}
          onClick={() => { setSelectedTab('all'); setCurrentIndex(0); }}
        >
          ALL
        </h2>
        <h2
          className={`text-center text-[15px] md:text-xl font-bold my-8 cursor-pointer ${selectedTab === 'photos' ? 'text-[#FFA800]' : ''}`}
          onClick={() => { setSelectedTab('photos'); setCurrentIndex(0); }}
        >
          PHOTOS
        </h2>
        <h2
          className={`text-center text-[15px] md:text-xl font-bold my-8 cursor-pointer ${selectedTab === 'videos' ? 'text-[#FFA800]' : ''}`}
          onClick={() => { setSelectedTab('videos'); setCurrentIndex(0); }}
        >
          VIDEOS
        </h2>
      </div>

      {/* Item (Photo/Video) Display Section */}
      <div className='flex flex-wrap justify-center items-center gap-6 md:mt-8'>
        {/* Display three items, wrapping around when reaching the end */}
        {getDisplayedItems().map((item) => (
          <div
            key={item.id}
            className='relative h-40 w-56 md:h-48 md:w-72 bg-[#A6A6A6] flex items-center justify-center rounded-lg shadow-lg'
          >
            {/* Centered text over media */}
            <p className='absolute text-xl font-bold text-white'>
              {item.text}
            </p>

            {/* Render either an image or a video */}
            {item.type === 'photo' ? (
              <img src={item.src} alt='' className='object-cover w-full h-full rounded-lg' />
            ) : (
              <video src={item.src} controls className='object-cover w-full h-full rounded-lg' />
            )}
          </div>
        ))}

        {/* right arrow */}
        <div
          className='bg-[#353535] h-full px-2 py-2 md:py-4 lg:py-6 rounded-3xl cursor-pointer'
          style={{
            boxShadow: '8px 9px 19px 0px #000000A6',
          }}
          onClick={handleNextItems} // Add click handler for next items (move by 3)
        >
          <svg className='h-6 sm:h-8 md:h-12 font-bold' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white">
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
