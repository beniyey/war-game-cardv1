import { createContext, useState } from 'react';
import './App.css';
import HomePage from './views/HomePage';
import GamePage from './views/GamePage';
import ScorePage from './views/ScorePage';
import { Routes, Route } from 'react-router-dom';
import { playerContext } from './context/playerContext';
import { computerContext } from './context/computerContext';
import Playing from './views/Playing';

function App() {
  const [player, setPlayer] = useState()
  const [computer, setComputer] = useState()

  return (
    <div className='App h-screen bg-gray-600 flex items-center w-full justify-center'>
      <playerContext.Provider value={{ player, setPlayer }}>
        <computerContext.Provider value={{ computer, setComputer }}>
          Test bla bla
        </computerContext.Provider>
      </playerContext.Provider>
    </div>
  );

}
export default App;
