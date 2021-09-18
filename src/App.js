import './sass/App.scss';
import Main from './components/Main';
import { useEffect, useRef, useState } from 'react';

function App() {
  const sounds = [
    {
      key: 'Q',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      key: 'W',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      key: 'E',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      key: 'A',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      key: 'S',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      key: 'D',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      key: 'Z',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      key: 'X',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      key: 'C',
      mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];

  return (
    <div className="App">
      <Main sounds={sounds} />
    </div>
  );
}

export default App;
