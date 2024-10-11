import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import AlabayGuardian from '../components/GameDetails/AlabayGuardian';
import AlabayHeritage from '../components/GameDetails/AlabayHeritage';

const GameDetails = () => {
  const { gameId } = useParams(); // Get the gameId from the URL

  return (
    <div>
      {gameId === 'alabay-guardian' && <AlabayGuardian />}
      {gameId === 'alabay-heritage' && <AlabayHeritage />}
    </div>
  );
}

export default GameDetails;
