import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameDetails from './pages/GameDetails';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dynamic route for game details using a parameter (gameId) */}
        <Route path="/game-details/:gameId" element={<GameDetails />} />
      </Routes>
    </Router>
  )
}

export default App